'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {
  constructor(args, opts) {
    super(args, opts);
    this.option('path', {
      type: String,
      required: true
    });
  }

  initializing() {
    if (this.options.path) {
      this.env.path = this.options.path;
    }
  }

  prompting() {
  }
  
  installing() {
    /**
     * @todo run a command like the following to spawn new docker containers.
     * docker-compose run -w /home/node/html/core/webcomponents/apps/nickie-app --entrypoint="polymer serve -H 0.0.0.0" -p 8081:8081 --rm devmachine
     */
    console.log(this.env.path);
  }
};