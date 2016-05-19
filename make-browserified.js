var browserify = require('browserify')
, fs = require('fs');

var b = browserify();

b.require('./lib/omlib.js', { expose: 'omlib' });
b.bundle().pipe(fs.createWriteStream(__dirname + '/build/omlib.js'));