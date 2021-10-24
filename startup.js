import { Service } from 'node-windows';

// Create a new service object
const svc = new Service({
    name: 'gimme-new-node',
    description: 'Check if there is a newer version of Node.js than the one that is installed on the machine.',
    // eslint-disable-next-line no-useless-escape
    script: `${process.env.APPDATA}\npm\node_modules\gimme-new-node\index.js`,
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
    svc.start();
    console.log('Service added successfully!');
});

svc.on('alreadyinstalled', function() {
    console.log('Service is already installed.');
});

svc.on('error', function(err) {
    console.error(`There was an error while trying to start the service. ${err}`);
});

svc.install();
