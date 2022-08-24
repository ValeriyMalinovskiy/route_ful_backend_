#!/bin/bash

echo "Checking if the container $1  exist"

if [ "$(docker ps -q -f name=$1)" ]; then
    # stop your container
    echo "Container $1 is running now. Trying to stop"
    docker rm --force $1
fi
