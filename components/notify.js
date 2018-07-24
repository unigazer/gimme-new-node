const WindowsToaster = require('node-notifier').WindowsToaster,
    opn = require('opn');

// Create notification
/**
 * Creates a toast notification on the desktop
 * @param {string} latest Latest Node.js version from GitHub releases.
 * This only shows the notification if there is a version greater than
 * the one that is installed on your machine.
 */
var Notify = latest => {
    let notifier = new WindowsToaster({
        withFallback: true
    });

    notifier.notify({
        title: 'New Node.js version is available',
        message: `Version tag: ${latest}\nClick on the notification to download`,
        icon: './icons/app.png',
        wait: true
    }, (err, res) => {
        if (err) console.error(err);
    });

    notifier.on('click', () => {
        opn(`https://nodejs.org/dist/${latest}/node-${latest}-${process.arch}.msi`);
    });

    return this;
};

module.exports = Notify;