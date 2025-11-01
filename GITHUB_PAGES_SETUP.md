# GitHub Pages Setup for VSCode Palenight Theme

## Quick Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/AntFleming0/BetterDiscordTheme`
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/ (root)**
   - Click **Save**

### 2. Wait for Deployment

- GitHub will automatically build and deploy your site
- It usually takes 1-3 minutes
- Check the "Actions" tab to see deployment progress
- Your theme will be available at: `https://AntFleming0.github.io/BetterDiscordTheme/`

### 3. Verify Your Theme URL

Once deployed, your theme files will be accessible at:

- Main theme: `https://AntFleming0.github.io/BetterDiscordTheme/themes/palenight.theme.css`
- Build CSS: `https://AntFleming0.github.io/BetterDiscordTheme/build/palenight.css`

### 4. Test Installation

1. Open the theme URL in your browser to verify it loads
2. Add the theme to BetterDiscord using the installation instructions in README.md
3. Enable the theme and test it in Discord

## Updating the Theme

After making changes to your theme:

```bash
# 1. Stage your changes
git add .

# 2. Commit your changes
git commit -m "Update theme colors/features"

# 3. Push to GitHub
git push origin main
```

GitHub Pages will automatically update within 1-3 minutes!

## File Structure for GitHub Pages

Make sure these files are in your repository:

```
/build/palenight.css          ← Built CSS file (combined sources)
/themes/palenight.theme.css   ← Main theme file with metadata
/src/*.css                     ← Source files (for development)
README.md                      ← Documentation
```

## Troubleshooting

### Theme not loading?

1. Check that GitHub Pages is enabled in Settings
2. Verify the deployment was successful in the Actions tab
3. Make sure the file paths in your theme match the repository structure
4. Clear Discord's cache (Ctrl+Shift+I → Application → Clear Storage)

### Making updates?

1. Edit files in `/src/` directory
2. Rebuild `/build/palenight.css` by concatenating source files
3. Commit and push to GitHub
4. Wait for GitHub Pages to redeploy (1-3 minutes)
5. Users will automatically get updates when they reload Discord

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure DNS settings with your domain provider
3. Update theme URLs in `palenight.theme.css` to use your custom domain
