#!/bin/sh

# Check the environment variable and start the application accordingly
if [ "$ENV" = "production" ]; then
    npm run start
else
    npm run dev
fi