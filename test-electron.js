try {
  const electron = require('electron');
  console.log('Electron loaded:', typeof electron);
  console.log('Available properties:', Object.keys(electron || {}));
} catch (error) {
  console.error('Error loading electron:', error.message);
}
