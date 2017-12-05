'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {

  prompting() {
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What opperation would you like to perform?',
        choices: [
          'Polymer App'
        ]
      }
    ]).then((answers) => {
      this.answers = answers
    })
  }

  writing() {
    if (this.answers.operation === 'Create new app') {
    }
  }
};
