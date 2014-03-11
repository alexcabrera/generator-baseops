# generator-baseops

This is a [Yeoman Generator](http://yeoman.io) that creates a baseline  environment suitable for web application development within a Vagrant-managed virtual machine.

It configures an Ubuntu 13.10 server running [Nginx](http://nginx.org), [PostgreSQL](http://www.postgresql.org/), and [Supervisor](http://supervisord.org/).

## Prerequisites

| Package                            	| Version |
|-------------------------------------------------|
| [Vagrant](http://vagrantup.com)    	| 1.5.x   |
| [Ansible](http://ansibleworks.com) 	| 1.5.x   |
| [npm](http://npmjs.org) 				 	| 1.4.x   |


## Installation

You may install this generator using [npm](https://www.npmjs.org/).

```
→ npm install baseops
```

## Usage

Run `yo baseops` from within a project directory, then follow the on-screen instructions.

```
→ mkdir myproject
→ cd myproject
→ yo baseops
```
## Development Environment

Use Vagrant to start the development environment.

```
→ vagrant up
```

Vagrant will launch an [Ubuntu 13.10 Server](http://www.ubuntu.com/server) virtual machine, provision it using Ansible, and make the contents of this directory available at `/srv/{{ project name }}`.

If you make any changes to the provisioning files in `ops/`, you'll need to run `vagrant provision` to apply your changes to the virtual machine.

# License

[Unlicense](http://unlicense.org/). See `LICENSE` for details.
