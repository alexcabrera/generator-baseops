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

  var prompts = [
    {
        message: 'Choose a VM configuration for Vagrant',
        type: 'list',
        name: 'vmConfiguration',
        default: 'single',
        choices: [
            {
                name: 'single - all roles on one machine',
                value: 'single'
            },
            {
                name: 'multi - each role on its own machine',
                value: 'multi'
            }
        ]
    }
  ]

  this.prompt(prompts, function (props) {
    this.vmConfiguration = props.vmConfiguration
    console.log(this.vmConfiguration);
    cb();
  }.bind(this));
};

BaseopsGenerator.prototype.app = function app() {
  this.directory('ops', 'ops');
  this.template('_Vagrantfile', 'Vagrantfile');
  this.copy('_package.json', 'package.json');
};
