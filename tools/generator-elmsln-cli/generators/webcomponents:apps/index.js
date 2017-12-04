'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {

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
};
