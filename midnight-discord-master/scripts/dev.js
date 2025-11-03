const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// File and directory paths
const baseFile = path.join(__dirname, '..', '/themes/midnight.theme.css');
const palenightBaseFile = path.join(__dirname, '..', '/themes/palenight.theme.css');
const buildFile = path.join(__dirname, '..', '/build/midnight.css');
const palenightBuildFile = path.join(__dirname, '..', '/build/palenight.css');
const srcDir = path.join(__dirname, '..', '/src');
const outputPaths = process.env.DEV_OUTPUT_PATH ? process.env.DEV_OUTPUT_PATH.split(',') : [];

// Ensure output paths are set
if (outputPaths.length === 0) {
    console.error('DEV_OUTPUT_PATH is not set in .env file');
    process.exit(1);
}

// Combine all CSS files from the source directory
function combineSourceFiles() {
    let combinedCSS = '';

    // Get all CSS files
    const allFiles = fs
        .readdirSync(srcDir)
        .filter((file) => file.endsWith('.css'))
        .map((file) => path.join(srcDir, file));

    // Split into main.css and other files
    const mainFile = allFiles.find((file) => path.basename(file) === 'main.css');
    const otherFiles = allFiles.filter((file) => path.basename(file) !== 'main.css');

    // Process main.css first if it exists
    if (mainFile) {
        const mainContent = fs.readFileSync(mainFile, 'utf8');
        combinedCSS += `/* ${path.basename(mainFile)} */\n${mainContent}\n`;
    }

    // Then process other files
    otherFiles.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        combinedCSS += `/* ${path.basename(file)} */\n${content}\n`;
    });

    fs.writeFileSync(buildFile, combinedCSS);
    fs.writeFileSync(palenightBuildFile, combinedCSS); // Also build palenight
    return combinedCSS;
}

// Process the base file and replace imports with actual content
function processBaseFile(compiledCSS) {
    // Process midnight theme
    const baseContent = fs.readFileSync(baseFile, 'utf8');
    const importRegex = /@import\s+url\(['"]?[^'"]+['"]?\);/g;
    const processedContent = baseContent.replace(importRegex, compiledCSS);

    // Process palenight theme
    const palenightContent = fs.readFileSync(palenightBaseFile, 'utf8');
    const processedPalenight = palenightContent.replace(importRegex, compiledCSS);

    outputPaths.forEach((outputPath) => {
        // Determine which theme to use based on filename
        if (outputPath.includes('palenight')) {
            fs.writeFileSync(outputPath, processedPalenight);
        } else {
            fs.writeFileSync(outputPath, processedContent);
        }
        console.log(`Updated ${outputPath}`);
    });
}

// Main function to process files
function processFiles() {
    try {
        const compiledCSS = combineSourceFiles();
        processBaseFile(compiledCSS);
    } catch (error) {
        console.error('Error processing files:', error);
    }
}

processFiles();

// Set up watchers
const watcher = chokidar.watch([baseFile, palenightBaseFile, `${srcDir}/**/*.css`], {
    ignoreInitial: true,
});

// Watch for changes
watcher
    .on('change', (filePath) => {
        console.log(`File changed: ${filePath}`);
        processFiles();
    })
    .on('add', (filePath) => {
        console.log(`New file added: ${filePath}`);
        processFiles();
    })
    .on('unlink', (filePath) => {
        console.log(`File deleted: ${filePath}`);
        processFiles();
    })
    .on('error', (error) => console.error(`Watcher error: ${error}`));
