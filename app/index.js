'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BaseopsGenerator = module.exports = function BaseopsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BaseopsGenerator, yeoman.generators.Base);

BaseopsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = []
    /* 
    *  # Example Prompt
    *  {
    *    type: 'confirm',
    *    name: 'someOption',
    *    message: 'Would you like to enable this option?',
    *    default: true
    *  }
    */

  this.prompt(prompts, function (props) {
    /* 
     * # Setting Options
     * this.someOption = props.someOption;
    */
    cb();
  }.bind(this));
};

BaseopsGenerator.prototype.app = function app() {
  this.directory('app', 'app');
  this.directory('ops', 'ops');

  this.copy('manage.py', 'manage.py');
  this.copy('requirements.txt', 'requirements.txt');

  this.copy('Vagrantfile', 'Vagrantfile');
  this.copy('_package.json', 'package.json');
};
