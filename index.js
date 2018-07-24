// Imports
const fetch = require('node-fetch'),
    Notify = require('./components/notify');

// Create a start up entry
require('./components/startup');

// Get the latest version
(async () => {
    try {
        // Get the data
        let res = await fetch('https://api.github.com/repos/nodejs/node/releases/latest', {
            headers: {
                'User-Agent': 'VladimirDev93',
                'Content-Type': 'application/json'
            }
        });
        // Put the data
        let data = await res.json();
        // Get the latest version by tag
        let latest = data.tag_name;
        // Current Node.js version on the machine
        let current = process.version;

        // Show the notificaion
        if (latest > current)
            Notify(latest);

    } catch (error) {
        console.error(error);
    }
})();