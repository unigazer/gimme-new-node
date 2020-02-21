const os = require('os');
const AutoLaunch = require('auto-launch');

// Create start up entry
const nodeJSChecker = new AutoLaunch({
    name: 'Node.js Checker',
    path: `${os.homedir()}\\AppData\\Roaming\\npm\\node_modules\\node-checker\\NodeChecker.bat`
});

// Enable the entry
nodeJSChecker.enable();

// Check if it's enabled
nodeJSChecker.isEnabled()
    .then((isEnabled) => {
        if (isEnabled) {
            return;
        }
        nodeJSChecker.enable();
    })
    .catch((error) => {
        throw new Error(error);
    });