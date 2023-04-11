#!/bin/bash

# Output current working directory to a file
pwd > /tmp/install_dependencies_dir.log

# Install Node.js dependencies
cd /home/ec2-user/server/
npm install