'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var glob = require("glob");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type    : 'confirm',
        name    : 'confirm',
        message : 'Are you sure you want to clean up the bower components?'
      }
    ]).then((answers) => {
      this.options.confirm = answers.confirm;
    });
  }

  writing() {
    // make sure the user confirmed the operation.
    if (this.options.confirm !== true) return;

    // Get a list of all bower imports .
    this._files = new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/elements/**/*.html'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });

    // Clean the files
    const clean = this._files.then(files => this._emptyFiles(files));
    clean.then(() => this.log('Files have been cleaned'));
  }

  // empty an array of files
  _emptyFiles(files) {
    var cleanFiles = files.map(file => this.fs.write(file, ' '));
    return cleanFiles;
  }
};
