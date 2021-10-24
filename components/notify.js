import { WindowsToaster } from 'node-notifier';
import open from 'open';

// Create notification
/**
 * Creates a toast notification on the desktop
 * @param {string} latest Latest Node.js version from GitHub releases.
 * This only shows the notification if there is a version greater than
 * the one that is installed on your machine.
 */
const notify = (latest, lts = '') => {
    let notifier = new WindowsToaster({
        withFallback: true
    });

    notifier.notify({
        title: `New Node.js ${lts} version is available`,
        message: `Version tag: ${latest}\nClick on the notification to download`,
        icon: './icons/app.png',
        wait: true,
        appID: 'gimme-new-node',
    }, (error) => {
        if (error) {
            throw new Error(error);
        }
    });

    notifier.on('click', () => {
        open(`https://nodejs.org/dist/${latest}/node-${latest}-${process.arch}.msi`);
    });
};

export default notify;
