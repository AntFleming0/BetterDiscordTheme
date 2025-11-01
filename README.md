# VSCode Palenight - BetterDiscord Theme

A beautiful BetterDiscord theme inspired by VSCode's Palenight (mild contrast) color scheme. This theme brings the elegant and eye-comfortable colors of VSCode's popular Palenight theme to Discord.

![Theme Preview](https://img.shields.io/badge/version-1.0.0-C792EA?style=for-the-badge) ![BetterDiscord](https://img.shields.io/badge/BetterDiscord-Compatible-82AAFF?style=for-the-badge)

## ✨ Features

- 🎨 **Authentic Palenight Colors** - Carefully matched color palette from VSCode Palenight theme
- 🔤 **Fira Code Font** - Uses the same monospace font as VSCode for a cohesive experience
- 🎭 **Customizable** - Extensive customization options for layout, animations, and more
- 🪟 **Modern UI** - Clean, rounded panels with subtle borders and spacing
- 💨 **Smooth Animations** - Optional smooth transitions and hover effects
- 🎯 **Best Practices** - Built following the structure of the popular Midnight theme

## 🎨 Color Palette

The theme uses the authentic VSCode Palenight color scheme:

- **Background**: `#1f2129` (Editor background)
- **Sidebar**: `#292d3e` (Sidebar background)
- **Purple**: `#C792EA` (Keywords, accent color)
- **Blue**: `#82AAFF` (Variables, links)
- **Cyan**: `#89DDFF` (Operators)
- **Green**: `#C3E88D` (Strings, online status)
- **Yellow**: `#FFCB6B` (Functions, warnings)
- **Red**: `#F07178` (Errors, DND status)
- **Orange**: `#F78C6C` (Numbers)
- **Pink**: `#FF9CAC` (Special)

## 📥 Installation

### Method 1: Direct Import (Recommended)

1. Make sure you have [BetterDiscord](https://betterdiscord.app/) installed
2. Download the theme file: [`palenight.theme.css`](https://github.com/AntFleming0/BetterDiscordTheme/blob/main/themes/palenight.theme.css)
3. Place the file in your BetterDiscord themes folder:
   - **Windows**: `%AppData%\BetterDiscord\themes`
   - **Mac**: `~/Library/Application Support/BetterDiscord/themes`
   - **Linux**: `~/.config/BetterDiscord/themes`
4. Open Discord settings → Themes → Enable "VSCode Palenight"

### Method 2: Quick Install URL

1. Open BetterDiscord settings
2. Go to Themes
3. Click "Open Theme Folder"
4. Create a new file called `palenight.theme.css`
5. Paste this import line:

```css
@import url("https://AntFleming0.github.io/BetterDiscordTheme/themes/palenight.theme.css");
```

## ⚙️ Customization

You can customize the theme by editing the variables in the theme file. Here are some common customizations:

### Change Font

```css
--font: "Your Font Name";
--code-font: "Your Code Font";
```

### Adjust Panel Spacing

```css
--gap: 16px; /* default is 12px */
```

### Enable Background Blur

```css
--panel-blur: on;
--blur-amount: 16px;
```

### Change Chatbar Style

```css
--custom-chatbar: separated; /* options: off, aligned, separated */
```

### Add Custom Background Image

```css
--background-image: on;
--background-image-url: url("your-image-url-here");
```

### Disable Animations

```css
--animations: off;
```

## 🛠️ Advanced Customization

For advanced users who want to modify the source files:

1. Clone this repository
2. Edit the CSS files in the `/src` directory
3. Combine them into `/build/palenight.css`:
   ```powershell
   Get-Content src\*.css | Set-Content build\palenight.css
   ```
4. Commit and push to your repository
5. Enable GitHub Pages to serve the files

## 📁 Project Structure

```
BetterDiscordTheme/
├── src/                    # Source CSS files
│   ├── main.css           # Core layout and structure
│   ├── colors.css         # Palenight color scheme
│   ├── animations.css     # Hover and transition effects
│   ├── background-image.css
│   ├── chatbar.css        # Chat input styling
│   ├── dms-button.css     # DM button customization
│   ├── top-bar.css        # Top bar layout
│   ├── transparency-blur.css
│   ├── user-panel.css     # User panel styling
│   └── window-controls.css
├── build/                  # Combined CSS output
│   └── palenight.css      # Built theme file
└── themes/                 # Theme metadata
    └── palenight.theme.css # Main theme file
```

## 🤝 Credits

- **Original Theme Structure**: Based on [Midnight](https://github.com/refact0r/midnight-discord) by refact0r
- **Color Scheme**: [Material Palenight Theme](https://github.com/whizkydee/vscode-material-palenight-theme) for VSCode
- **Author**: [AntFleming0](https://github.com/AntFleming0)

## 📝 License

This theme is available under the MIT License. Feel free to modify and share!

## 🐛 Issues & Suggestions

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/AntFleming0/BetterDiscordTheme/issues) on GitHub.

## 🌟 Support

If you like this theme, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔄 Sharing with friends

---

**Note**: This theme requires BetterDiscord to be installed. BetterDiscord is a third-party modification of Discord and is not officially supported by Discord Inc. Use at your own discretion.
