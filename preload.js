const { ipcRenderer } = require('electron');

// Expose getUserDataPath to window
window.getUserDataPath = async () => {
  return await ipcRenderer.invoke('get-user-data-path');
};
