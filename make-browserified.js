var browserify = require('browserify')
, fs = require('fs');

var b = browserify();

b.require('./lib/om.js', { expose: 'omclient' });
b.bundle().pipe(fs.createWriteStream(__dirname + '/build/omclient.js'));