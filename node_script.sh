#!/bin/bash

NODE_CMD="nodejs node-hello-dialback.js"

eval "$NODE_CMD 2>&1 >> /tmp/node_prog.log" &
NODE_PID=$$
echo $NODE_PID
