'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');

module.exports = class extends Generator {
  // Get a list of all bower imports .
  getApps() {
    return new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/apps/*'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  }

  // Get a list of all bower imports .
  getElements() {
    return new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/elements/**/*.html'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  }

  getElementsImportFiles() {
    return new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/elements/**/*.html'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  }

  // empty an array of files
  emptyFiles(files) {
    var cleanFiles = files.map(file => this.fs.write(file, ' '));
    return cleanFiles;
  }
};
