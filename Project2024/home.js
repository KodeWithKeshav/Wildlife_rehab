const{app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 4000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('HOME/Homepage.html');
} 

app.whenReady().then(createWindow);