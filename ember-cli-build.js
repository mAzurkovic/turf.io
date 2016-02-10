/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/semantic-ui/dist/semantic.css');
  app.import('bower_components/semantic-ui/dist/semantic.js');
  app.import('bower_components/font-awesome/css/font-awesome.css');

  return app.toTree();
};
