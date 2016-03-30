var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

omlib.init({
    sync: true,
    persist: false,
});