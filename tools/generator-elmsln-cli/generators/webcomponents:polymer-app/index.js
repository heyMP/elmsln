'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this app?',
      }
    ]).then((answers) => {
      answers.name = this.case(answers.name, 'kebab');
      this.answers = answers
    })
  }

  writing() {
  }
};
