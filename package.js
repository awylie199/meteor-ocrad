Package.describe({
  name: 'wilybear:meteor-ocrad',
  version: '0.0.1',
  summary: 'Client side optical character recognition (OCR) using ocrad.js',
  git: 'https://github.com/awylie199/meteor-ocrad.git',
  documentation: 'README.md'
});

Npm.depends({
    "ws"        : "0.8.1"
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.addFiles([
        'ocrad.es5.js',
        'meteor-ocrad.js'
    ], [
      'client',
      'server'
    ]);

    api.export('OCRAD');
});
