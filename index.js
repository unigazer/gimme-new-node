// Imports
import got from 'got';
import notify from './components/notify.js';

// Get the latest version
(async () => {
    try {
        // Get the data
        const res = await got('https://gimme-new-node-api.vercel.app/api/query').json();
        const localVersion = process.version.split('.').join('').substring(1);

        // If the local version is LTS
        if (process.release?.lts) {
            const versions = res.filter(({ tagName, name }) => {
                return name.includes('LTS') && Number(tagName.split('.').join('').substring(1)) > Number(localVersion);
            });
            if (versions?.[0]?.tagName) {
                notify(versions[0].tagName, 'LTS');
            }
        } else {
            const versions = res.filter(({ isLatest, tagName }) => {
                return isLatest && Number(tagName.split('.').join('').substring(1)) > Number(localVersion);
            });
            if (versions?.[0]?.tagName) {
                notify(versions[0].tagName);
            }
        }
    } catch (error) {
        throw new Error(error);
    }
})();
