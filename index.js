// Imports
const fetch = require('node-fetch');
const notify = require('./components/notify');

// Create a start up entry
require('./components/startup');

// Get the latest version
(async () => {
    try {
        // Get the data
        let res = await fetch('https://api.github.com/repos/nodejs/node/tags', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Put the data
        let data = await res.json();

        // Get the latest version by tag
        let latest = data[1].name;

        // Current Node.js version on the machine
        let current = process.version;
        let strtonumLatest = latest.substr(1);
        let strtonumCurrent = current.substr(1);

        // Show the notificaion
        if (parseFloat(strtonumLatest) > parseFloat(strtonumCurrent)) {
            notify(latest);
        }
    } catch (error) {
        throw new Error(error);
    }
})();