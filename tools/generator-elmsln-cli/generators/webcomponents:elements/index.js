'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var glob = require("glob");

module.exports = class extends Generator {
  initializing() {
  }

  prompting() {
    // get the list of elements 
    return this.getElements()
    // trim the path to only show the element name
    .then(elements => elements.map(el => el.slice(44)))
    .then((elements) => {
      return this.prompt([
        {
          type: 'list',
          name: 'operation',
          message: 'Select the elements.',
          choices: elements
        }
        ]).then((answers) => {
          this.answers = answers
        })
    })
  }

  getElements() {
    // Get a list of all bower imports .
    return new Promise((resolve, reject) => {
      glob(this.destinationPath('core/webcomponents/elements/*'), (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  }
};
