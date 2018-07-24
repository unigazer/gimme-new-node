const os = require('os'),
    AutoLaunch = require('auto-launch');

// Create start up entry
let NodeJSChecker = new AutoLaunch({
    name: 'Node.js Checker',
    path: `${os.homedir()}\\AppData\\Roaming\\npm\\node_modules\\node-checker\\launch.bat`
});

// Enable the entry
NodeJSChecker.enable();