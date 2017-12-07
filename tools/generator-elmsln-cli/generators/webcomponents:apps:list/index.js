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
          type: 'list',
          name: 'app',
          message: 'Select the app you would like to perform an operation on.',
          choices: apps,
          pageSize: 40
        }
        ]).then((answers) => {
          this.answers = answers
        })
    })
  }

  writing() {
    this.composeWith(require.resolve('../webcomponents:serve', this.options));
  }
};
