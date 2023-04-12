#!/bin/bash

# Install Node.js dependencies
cd /home/ec2-user/server
npm install

#starts the server in the background, saves its process ID
node index.js &
PID=$!

# exit with a message indicating the server's process ID.
echo "Server is running with PID ${PID}."