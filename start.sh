#!/bin/bash
pm2 stop consumer-web
npm install
npm run build
pm2 start consumer-web
                      