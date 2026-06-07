#!/bin/sh
nginx -g "daemon off;" &
exec bun --port 3001 dist/server/server.js