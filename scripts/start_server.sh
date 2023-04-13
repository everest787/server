#!/bin/bash

# Install Node.js dependencies
cd /home/ec2-user/server
npm install

#starts the server in the background
node index.js &

exit 0