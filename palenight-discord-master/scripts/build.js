const fs = require('fs');
const path = require('path');

// File and directory paths
const buildFile = path.join(__dirname, '..', '/build/palenight.css');
const srcDir = path.join(__dirname, '..', '/src');

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
    
    console.log(`Built ${buildFile}`);
    
    return combinedCSS;
}

// Main function to build
function build() {
    try {
        combineSourceFiles();
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Error building:', error);
        process.exit(1);
    }
}

build();
