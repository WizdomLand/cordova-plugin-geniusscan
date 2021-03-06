
var exec = require('cordova/exec');

var PLUGIN_NAME = 'GeniusScanCordovaPlugin';

var GeniusScanCordovaPlugin = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  }
};

module.exports = GeniusScanCordovaPlugin;
