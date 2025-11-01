# Grid Browser

A customizable grid browser built with Electron that displays multiple websites simultaneously with synchronized controls.

[![Release](https://img.shields.io/badge/release-v0.1.0-blue)](https://github.com/luqmaansu/grid-browser/releases/latest)
[![Download](https://img.shields.io/badge/download-installer-brightgreen)](https://github.com/luqmaansu/grid-browser/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Customizable Grid Layout**: Configure any number of rows and columns (e.g., 2x2, 3x3, 4x2)
- **Settings Panel**: Easy-to-use GUI for configuring grid size, URLs, zoom, and offsets
- **Adjustable Zoom**: `Ctrl+=` / `Ctrl+-` to zoom in/out all views
- **Y-Offset Control**: `Ctrl+↑` / `Ctrl+↓` to crop content from top
- **Hot Reload**: `F5` or `Ctrl+R` to reload all views
- **Fullscreen**: `F11` to toggle fullscreen mode
- **Persistent Settings**: All settings are automatically saved to your user data folder

## Download

**[Download the latest installer](https://github.com/luqmaansu/grid-browser/releases/latest)**

Run `Grid Browser Setup 0.1.0.exe` to install on Windows.

## Development Setup

```bash
npm install
npm start
```

To build the installer:
```bash
npm run build
```

## Configuration

### Using the Settings Panel (Recommended)

Click the **gear icon** (⚙️) in the bottom-right corner to open the settings panel where you can:
- Change grid size (rows and columns)
- Set URLs for each cell
- Adjust zoom level
- Configure Y-offset
- Set offset step size

Click **Save & Reload** to apply your changes.

### Manual Configuration

The configuration file is stored at:
- **Windows**: `%APPDATA%\Roaming\grid-browser\config.json`
- **Development**: `%APPDATA%\Roaming\Electron\config.json`

You can manually edit `config.json`:

```json
{
  "rows": 3,              // Number of rows
  "columns": 3,           // Number of columns
  "yOffset": 0,           // Pixels to crop from top
  "currentZoom": 1.0,     // Zoom level (1.0 = 100%)
  "offsetStep": 5,        // Pixels to adjust per keypress
  "urls": [
    "https://example.com",
    "https://example.com",
    // ... one URL per grid cell
  ]
}
```

Reload the app (`F5`) to apply manual changes.

## Keyboard Shortcuts

| Shortcut        | Action             |
| --------------- | ------------------ |
| `F5` / `Ctrl+R` | Reload page        |
| `Ctrl+Shift+=`  | Zoom in            |
| `Ctrl+-`        | Zoom out           |
| `Ctrl+0`        | Reset zoom to 100% |
| `Ctrl+↑`        | Crop more from top |
| `Ctrl+↓`        | Crop less from top |
| `Ctrl+Home`     | Reset crop offset  |
| `F11`           | Toggle fullscreen  |
| `F12`           | Toggle DevTools    |

## Notes

- Config file is stored in your user data directory (not in the installation folder)
- Settings are automatically saved when changed via keyboard shortcuts
- The refresh indicator in the bottom-right shows last reload time (click to reload)
- Settings panel provides Excel-style cell references (A1, B2, etc.)

## Tech Stack

- Electron
- Node.js
- HTML/CSS/JavaScript
