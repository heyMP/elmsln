'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type    : 'list',
        name    : 'operation',
        message : 'What operation would you like to perform?',
        choices: [
          'List Apps',
          'List Shared Elements',
          'Clean Dependecies'
        ]
      }
    ]).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    if (this.answers.operation === 'List Apps') {
      this.composeWith(require.resolve('../webcomponents:apps'));
    }
    if (this.answers.operation === 'List Shared Elements') {
      this.composeWith(require.resolve('../webcomponents:elements'));
    }
    if (this.answers.operation === 'Clean Dependecies') {
      this.composeWith(require.resolve('../webcomponents:clean'));
    }
  }
};
