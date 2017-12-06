'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your app?',
      }
    ];

    return this.prompt(prompts).then(props => {
      props = Object.assign(props, { name: this.case(props.name, 'kebab') });
      this.answers = props;
    });
  }

  writing() {
    const APPS_PATH = this.APPS_PATH;
    this.fs.copyTpl(
      this.templatePath('_name'),
      this.destinationPath(`${APPS_PATH}/${this.answers.name}`),
      this.props
    );
  }
  
};
