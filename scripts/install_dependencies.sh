#!/bin/bash

# Install Node.js dependencies
cd /home/ec2-user
rm -r server
git clone https://github.com/everest787/server.git
cd server
npm install