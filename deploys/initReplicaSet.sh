#!/bin/bash

DELAY=10

docker-compose --file ./development/docker-compose.yml down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)

docker-compose --file ./development/docker-compose.yml up -d --platform linux/amd64

echo "Delay: ${DELAY} seconds to get ready for container" 
sleep $DELAY

docker exec -it mongo1 /scripts/replica-set-init.sh
