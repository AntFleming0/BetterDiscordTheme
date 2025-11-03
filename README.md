# Palenight Discord Theme

A beautiful dark Discord theme based on the Palenight (Mild Contrast) color scheme from Visual Studio Code.

![Palenight Theme Preview](https://github.com/AntFleming0/BetterDiscordTheme/raw/main/assets/preview.png)

## Features

-   🎨 **Palenight Color Scheme** - Authentic Palenight colors matching VS Code with purple accents
-   ✨ **Sharp Corners** - Clean, minimal corners like VS Code for a cohesive experience
-   🌙 **Dark & Comfortable** - Easy on the eyes for long Discord sessions
-   ⚙️ **Highly Customizable** - Adjust colors, spacing, and behavior to your preference
-   🎭 **Custom Icons** - Includes custom DM icons (light and dark variants)

## Credits

**Thanks to [refact0r](https://github.com/refact0r) for creating the original [Midnight Discord](https://github.com/refact0r/midnight-discord) theme structure and framework that this theme is based on.**

This theme uses the Midnight Discord theme as a foundation and applies the Palenight color scheme with additional customizations.

## Install

### BetterDiscord / Vencord (or any client that supports theme files)

1. Download the theme file, [`palenight.theme.css`](https://github.com/AntFleming0/BetterDiscordTheme/blob/main/themes/palenight.theme.css). (there should be a download button at the top right of the page)
2. Drag the file into your theme folder. (there should be a button to open the theme folder in theme settings)
3. (Optional) Customize the theme by editing the options in `palenight.theme.css`.

### Install Through Link

Add `https://antfleming0.github.io/BetterDiscordTheme/build/palenight.css` to your theme import links. You will need to copy the theme variables to your QuickCSS in order to customize the theme.

## Customization

### Color Options

The theme includes the full Palenight color palette. Edit `palenight.theme.css` to customize:

```css
/* Main accent colors */
--accent-2: #7e57c2; /* Purple accent */
--accent-3: #7e57c2; /* Accent buttons */

/* Background colors */
--bg-4: #292d3e; /* Main background */
--bg-3: #25293a; /* Secondary background */
--bg-2: #2c3043; /* Dark buttons */
```

### Palenight Color Palette

| Color          | Hex       | Usage                         |
| -------------- | --------- | ----------------------------- |
| Background     | `#292D3E` | Main background               |
| Secondary BG   | `#25293A` | Panels and secondary elements |
| Primary Purple | `#7e57c2` | Accents and highlights        |
| Light Purple   | `#C792EA` | Links and emphasis            |
| Cyan           | `#89DDFF` | Normal text highlights        |
| Blue           | `#82AAFF` | Functions and special text    |
| Green          | `#C3E88D` | Online status, success        |
| Yellow         | `#FFCB6B` | Warnings, idle status         |
| Red            | `#EF5350` | Errors, DND status            |

### Border Radius (Corners)

Adjust the corner sharpness to your preference:

```css
/* Sharp corners like VS Code (default) */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-xl: 6px;

/* More rounded (Discord-like) */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;

/* Completely square corners */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-xl: 0px;
```

### Custom DM Icons

Switch between the included light and dark file icons:

```css
/* Dark icon */
--dms-icon-svg-url: url('https://antfleming0.github.io/BetterDiscordTheme/assets/files_Dark.svg');

/* Light icon */
--dms-icon-svg-url: url('https://antfleming0.github.io/BetterDiscordTheme/assets/files_Light.svg');

/* Disable custom icon */
--custom-dms-icon: off;
```

### Other Customization Options

-   **Font**: Change the main font and code font
-   **Spacing**: Adjust gaps between panels
-   **Animations**: Toggle animations on/off
-   **Transparency/Blur**: Enable transparency and blur effects
-   **Top Bar**: Customize height and button positions
-   **Window Controls**: Use custom window controls
-   **Chatbar**: Separate chatbar from chat
-   **User Panel**: Use smaller user panel style

See the theme file for detailed descriptions of all options.

## Contributing

This theme uses a dev script to check for changes in the source CSS files and combine them into a build file. To run locally:

1. Clone the repository.
2. Run `npm install`.
3. (Optional) Create a `.env` file in the project root with the paths of any local theme files you want to update:

```
DEV_OUTPUT_PATH=C:\Users\USERNAME\AppData\Roaming\Vencord\themes\palenight-dev.theme.css
```

4. Run `npm run dev` to watch for changes.
5. Edit files in the `/src/` directory.
6. The build script will automatically compile changes into the `/build/` directory.

## Support & Feedback

-   **Issues**: [GitHub Issues](https://github.com/AntFleming0/BetterDiscordTheme/issues)
-   **Original Theme Support**: [Midnight Discord Server](https://discord.gg/nz87hXyvcy)

## Credits

**Original Theme Structure**: [refact0r](https://github.com/refact0r) - [Midnight Discord](https://github.com/refact0r/midnight-discord)

**Original Design Inspiration**: [zelk](https://github.com/schnensch0/zelk)

**Window Controls Inspiration**: [Tokyo Night](https://github.com/Dyzean/Tokyo-Night)

**AI Assistance**: This theme was adapted and customized with the assistance of AI (GitHub Copilot) to transform the Midnight Discord theme into a Palenight-themed variant with color scheme extraction, file restructuring, and documentation.

Thanks to all the [contributors](https://github.com/refact0r/midnight-discord/graphs/contributors) to the original Midnight Discord theme!

## License

MIT License - Based on Midnight Discord theme by refact0r

## Version History

### v1.0.0 (Initial Release)

-   Initial Palenight theme release
-   Full Palenight color scheme implementation matching VS Code exactly
-   Sharp, minimal corners (VS Code-style) instead of rounded
-   Lighter backgrounds (#292D3E editor, #25293A sidebar) for better visibility
-   Custom DM icons (light variant as default)
-   Accurate purple accent colors (#7e57c2)
-   White text on notification badges
-   Based on Midnight Discord v2.1.1
-   Adapted with AI assistance

---

**Enjoy your new Palenight Discord theme! 🎨**

_If you like this theme, consider starring the repository and checking out the original [Midnight Discord](https://github.com/refact0r/midnight-discord) theme._
