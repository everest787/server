#!/bin/bash

# Install Node.js dependencies
cd /home/ec2-user/server
npm install

# Start the server in the background using nohup
nohup node index.js >/dev/null 2>&1 &

# Exit the script with a successful status code
exit 0
