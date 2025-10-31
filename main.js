const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  mainWindow.loadFile('index.html');

  // Set up application menu with zoom controls
  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: 'Reload (F5)',
          accelerator: 'F5',
          click: () => {
            mainWindow.reload();
          }
        },
        { type: 'separator' },
        {
          label: 'Crop More from Top',
          accelerator: 'CmdOrCtrl+Up',
          click: () => {
            mainWindow.webContents.send('offset-increase');
          }
        },
        {
          label: 'Crop Less from Top',
          accelerator: 'CmdOrCtrl+Down',
          click: () => {
            mainWindow.webContents.send('offset-decrease');
          }
        },
        {
          label: 'Reset Crop',
          accelerator: 'CmdOrCtrl+Home',
          click: () => {
            mainWindow.webContents.send('offset-reset');
          }
        },
        { type: 'separator' },
        {
          label: 'Zoom In',
          accelerator: 'CmdOrCtrl+=',
          click: () => {
            mainWindow.webContents.send('zoom-in');
          }
        },
        {
          label: 'Zoom In (Alternative)',
          accelerator: 'CmdOrCtrl+numadd',
          click: () => {
            mainWindow.webContents.send('zoom-in');
          }
        },
        {
          label: 'Zoom Out',
          accelerator: 'CmdOrCtrl+-',
          click: () => {
            mainWindow.webContents.send('zoom-out');
          }
        },
        {
          label: 'Zoom Out (Alternative)',
          accelerator: 'CmdOrCtrl+numsub',
          click: () => {
            mainWindow.webContents.send('zoom-out');
          }
        },
        {
          label: 'Reset Zoom',
          accelerator: 'CmdOrCtrl+0',
          click: () => {
            mainWindow.webContents.send('zoom-reset');
          }
        },
        { type: 'separator' },
        { role: 'toggleDevTools' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        { type: 'separator' },
        { role: 'minimize' },
        { role: 'close' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Optional: Open DevTools for debugging
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
