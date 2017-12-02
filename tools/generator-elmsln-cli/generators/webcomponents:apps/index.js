'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var glob = require("glob");

module.exports = class extends Generator {
  initializing() {
  }

  prompting() {
    // get the list of apps 
    return this.getApps()
    // trim the path to only show the app name
    .then(apps => apps.map(app => app.slice(40)))
    .then((apps) => {
      return this.prompt([
        {
          type: 'checkbox',
          name: 'operation',
          message: 'Select the app you would like to perform an operation on.',
          choices: apps
        }
        ]).then((answers) => {
          this.answers = answers
        })
    })
  }

  writing() {
  }

  getApps() {
    // Get a list of all bower imports .
    return new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/apps/*'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  }
};
