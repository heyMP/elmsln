#!/usr/bin/env node
'use strict';

/**
 * Require dependencies
 *
 */
const program = require('commander'),
  chalk = require('chalk'),
  exec = require('child_process').exec;

let createUsers = (target) => {
  users = ['admin', 'student1', 'student2', 'instructor'];
  users.forEach(function (username) {
    let cmd = 'drush';
    if (target) {
      cmd = cmd + ' @' + target;
    }
    console.log(cmd);
    // exec('drush ', (error, stdout, stderr) => {
    //   console.log(error);
    //   console.log(stdout);
    //   console.log(stderr);
    // })
  });
}

program
  .option('-s', '--site', 'Site.  This would be the drush target.')
  .action(createUsers);

program.parse(process.argv);

// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();
