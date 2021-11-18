#!/bin/bash

echo "application_start started"
cd /home/ec2-user
npm run build > /dev/null 2>&1 &