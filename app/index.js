'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var crypto = require('crypto');


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
        name: 'projectName',
        message: 'Project Name',
        type: 'input'
    },
    {
        name: 'gitRepoUrl',
        message: 'SSH Git Clone URL (ex. git@github.com:marquee/generator-baseops.git)',
        type: 'input'
    }
  ]

  this.prompt(prompts, function (props) {
    this.projectName    = props.projectName;
    this.gitRepoUrl     = props.gitRepoUrl;
    this.secretKey      = crypto.createHash('md5');
    cb();
  }.bind(this));
};

BaseopsGenerator.prototype.app = function app() {
  this.directory('ops', 'ops');
  this.template('_Vagrantfile', 'Vagrantfile');
  this.template('_package.json', 'package.json');
  this.copy('deploy.py', 'deploy.py');
};
