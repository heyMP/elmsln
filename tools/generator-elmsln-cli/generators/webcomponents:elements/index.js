'use strict';

require

module.exports = class extends kk {
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
};
