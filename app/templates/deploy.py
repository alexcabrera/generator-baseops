#!/usr/bin/env python

import os
import subprocess

DO_ENV = os.path.join(os.path.abspath(''), '.digitalocean')
PLAYBOOK = os.path.join(os.path.abspath(''), 'ops', 'digitalocean.yml')
INVENTORY = os.path.join(os.path.abspath(''), 'ops', 'inventory', 'digitalocean')


# Init .digitalocean file if it doesn't already exist
if not os.path.exists(DO_ENV):
    do_config = open(DO_ENV, 'w')
    do_config.write("DO_CLIENT_ID=\nDO_API_KEY=\n")
    print '.digitalocean file initialized'
    quit()

# Load environment variables
do_config = open(DO_ENV, 'r')
for line in do_config:
    key, value = line.split('=')
    os.environ[key] = value

# Run ansible provisioning
playbook_cmd = ['ansible-playbook', PLAYBOOK, '-i', INVENTORY]
subprocess.Popen(playbook_cmd)
