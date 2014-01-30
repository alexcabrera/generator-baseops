## Getting Started

This package creates a web application development environment based on Django 

### Requirements

Please have the following installed:

* [Vagrant](http://vagrantup.com) 1.4.3 or newer
* [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest) 0.10.0 or newer
* [Ansible](http://ansibleworks.com) from *devel* branch

#### How to install Ansible from the devel branch on Mac OS X

Use [Homebrew](http://brew.sh/).

```
→ brew install ansible --HEAD 	# install Ansible from *devel* branch
```

From that point on, upgrading the package is a simple matter of running Homebrew's upgrade command:

```
→ brew update                 # update Homebrew's repository listing
→ brew upgrade ansible        # apply the latest upstream changes
```

### Ignore SSH Key checking

You'll probably be destroying and rebuilding the box a lot and having to clean up your `known_hosts` file is going to get annoying pretty quick. Instead, add the following to `~/.ssh/config` to bypass the check when accessing the virtual machine.

```
Host 10.0.0.2
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null
```

### Development Environment

Use Vagrant to start the development environment.

```
→ vagrant up
```

Vagrant will launch an [Ubuntu 13.10 Server](http://www.ubuntu.com/server) virtual machine, provision it using Ansible, and make the contents of this directory available at `/srv/{{ project name }}`.

If you make any changes to the provisioning files in `ops/`, you'll need to run `vagrant provision` to apply your changes to the virtual machine.

# License

[Unlicense](http://unlicense.org/). See `LICENSE` for details.
