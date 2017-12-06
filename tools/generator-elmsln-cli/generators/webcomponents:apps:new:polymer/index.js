'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your app?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
      }
    ];

    return this.prompt(prompts).then(props => {
      props = Object.assign(props, { name: this.case(props.name, 'kebab') });
      this.answers = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_name'),
      this.destinationPath(`${this.APPS_PATH()}/${this.answers.name}`),
      this.answers
    );
  }

  installing() {
    const destinationPath = this.destinationPath(`${this.APPS_PATH()}/${this.answers.name}`);
    this.runInstall('bower', destinationPath);
  }
};
