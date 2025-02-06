#!/bin/sh

if [ "$1" = "clean" ]; then
    echo "=============================="
    echo "🧹 Starting from a clean slate"
    echo "=============================="
    echo "🔄 Generate intellisense for prisma to undertand the schema..."
    npx prisma generate
    echo "🚀 Take down container..."
    docker compose down
    echo "🧹 Prune containers..."
    docker prune
fi

echo "🚀 Building and starting containers with watch..."
docker compose up --build --watch