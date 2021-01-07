const pm2 = require('pm2');

pm2.connect(function (err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.start({
    name: 'gimme-new-node',
    script: 'index.js',
    exec_mode: 'cluster',
  }, function (err, apps) {
    pm2.disconnect();
    if (err) {
      throw new Error(err);
    }
  });
});
