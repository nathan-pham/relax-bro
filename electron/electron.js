const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");

const Database = require("./Database");
const db = new Database("database.json");

const isDev = process.env.IS_DEV == "true" ? true : false;
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../dist/index.html")}`
    );

    // Open the DevTools.
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

ipcMain.on("toElectron", (_, args) => {
    const { pathname, body } = JSON.parse(args);
    const json = (data) =>
        mainWindow.webContents.send("fromElectron", JSON.stringify(data));

    if (pathname === "set") {
        Object.keys(body).forEach((key) => db.set(key, body[key]));
        db.commit();

        json({ body });
    } else if (pathname === "get") {
        json(db.data);
    }
});
