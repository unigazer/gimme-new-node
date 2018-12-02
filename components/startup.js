import os from 'os';
import AutoLaunch from 'auto-launch';

// Create start up entry
let NodeJSChecker = new AutoLaunch({
    name: 'Node.js Checker',
    path: `${os.homedir()}\\AppData\\Roaming\\npm\\node_modules\\node-checker\\NodeChecker.bat`
});

// Enable the entry
NodeJSChecker.enable();