// Imports
const got = require('got');
const notify = require('./components/notify');

// Get the latest version
(async () => {
    try {
        // Get the data
        const res = await got('https://gimme-new-node-api.vercel.app/api/query').json();

        // Get the latest version by tag
        const [{ tag }] = res.filter(({ tag }) => tag.name.includes(process.version.slice(1,3)));

        // Current Node.js version on the machine
        const current_ver = process.version;

        // Show the notificaion
        if (current_ver < tag.name ) {
            notify(tag.name);
        }

    } catch (error) {
        throw new Error(error);
    }
})();
