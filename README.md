# Grid Browser

A CxR grid browser built with Electron that displays 9 websites simultaneously with synchronized controls.

## Features

- **CxR Grid Layout**: Arbitrary number of cols x rows
- **Adjustable Zoom**: `Ctrl+Shift+=` / `Ctrl+-` to zoom in/out
- **Y-Offset Control**: `Ctrl+↑` / `Ctrl+↓` to crop from top
- **Hot Reload**: `F5` or `Ctrl+R` to reload
- **Fullscreen**: `F11` to toggle fullscreen
- **Mouse Glow Effect**: Interactive border glow that follows your cursor
- **Persistent Settings**: Your zoom and offset preferences are saved automatically

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Configuration

On first run, `config.json` will be automatically created from `config.default.json`.

Edit `config.json` to customize:

```json
{
  "yOffset": 0,           // Pixels to crop from top (positive) or bottom (negative)
  "currentZoom": 1.0,     // Zoom level (1.0 = 100%, 0.5 = 50%, 1.5 = 150%)
  "offsetStep": 5,        // Pixels to adjust per Ctrl+↑/↓ keypress
  "urls": [
    "https://example.com",  // Top-left
    "https://example.com",  // Top-center
    "https://example.com",  // Top-right
    "https://example.com",  // Middle-left
    "https://example.com",  // Middle-center
    "https://example.com",  // Middle-right
    "https://example.com",  // Bottom-left
    "https://example.com",  // Bottom-center
    "https://example.com"   // Bottom-right
  ]
}
```

Press `F5` to reload and apply changes.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `F5` / `Ctrl+R` | Reload page |
| `Ctrl+Shift+=` | Zoom in |
| `Ctrl+-` | Zoom out |
| `Ctrl+0` | Reset zoom to 100% |
| `Ctrl+↑` | Crop more from top |
| `Ctrl+↓` | Crop less from top |
| `Ctrl+Home` | Reset crop offset |
| `F11` | Toggle fullscreen |
| `F12` | Toggle DevTools |

## Notes

- `config.json` is user-specific and not tracked in git
- Settings (zoom, offset) are automatically saved when changed
- The refresh indicator in the bottom-right shows last reload time (click to reload)
- The glowing border effect follows your mouse cursor

## Tech Stack

- Electron
- Node.js
- HTML/CSS/JavaScript
