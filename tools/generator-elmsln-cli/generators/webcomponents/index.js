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
          'Clean Dependecies'
        ]
      }
    ]).then((answers) => {
      this.log('clean?', answers.operation);
    });
  }

  writing() {
    this.composeWith(require.resolve('../webcomponents:clean'));
  }
};
