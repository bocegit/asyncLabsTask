#!/bin/bash

docker build -t project . &&
docker run -p 3000:3000/tcp project