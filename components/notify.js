const WindowsToaster = require('node-notifier').WindowsToaster;
const open = require('open');

// Create notification
/**
 * Creates a toast notification on the desktop
 * @param {string} latest Latest Node.js version from GitHub releases.
 * This only shows the notification if there is a version greater than
 * the one that is installed on your machine.
 */
const notify = (latest) => {
    let notifier = new WindowsToaster({
        withFallback: true
    });

    notifier.notify({
        title: 'New Node.js version is available',
        message: `Version tag: ${latest}\nClick on the notification to download`,
        icon: './icons/app.png',
        wait: true,
        appID: 'Gimme new node'
    }, (err, res) => {
        if (err) {
            console.error(err);
        }
    });

    notifier.on('click', async () => {
        await open(`https://nodejs.org/dist/${latest}/node-${latest}-${process.arch}.msi`);
    });
};

module.exports = notify;