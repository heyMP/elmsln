'use strict';
const ElmsGenerator = require('../ElmsGenerator');

module.exports = class extends ElmsGenerator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('path', {
      type: String,
    });
  }

  prompting() {
    console.log(this.options.path);
  }
  
  installing() {
    /**
     * @todo run a command like the following to spawn new docker containers.
     * docker-compose run -w /home/node/html/core/webcomponents/apps/nickie-app --entrypoint="polymer serve -H 0.0.0.0" -p 8081:8081 --rm devmachine
     */
  }
};