#!/bin/bash

# Install Node.js dependencies
cd /home/ec2-user/server
npm install

#starts the server in the background, saves its process ID
node index.js &
PID=$!

# loop that checks if the server is reachable and will keep running until the server is up
while ! curl -s http://localhost:3001 >/dev/null; do
    sleep 1
done

# exit with a message indicating the server's process ID.
echo "Server is running with PID ${PID}."