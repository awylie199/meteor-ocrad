Package.describe({
  name: 'wilybear:meteor-ocrad',
  version: '0.0.1',
  summary: 'Client side optical character recognition (OCR) using ocrad.js',
  git: 'https://github.com/awylie199/meteor-ocrad.git',
  documentation: 'README.md'
});

Npm.depends({
    "ws"        : "0.8.1",
    "ocrad.js"  : "0.0.1"
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use([
        'cosmos:browserify@0.9.3'
    ]);

    api.addFiles([
        'meteor-ocrad.js',
        'ocrad.browserify.js',
        'ocrad.browserify.options.json'
    ], 'client');

    api.export('OCRAD', 'client');
});
