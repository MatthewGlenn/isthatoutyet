#!/bin/sh
# This stores the all the intellisense for prisma to undertand the schema
npx prisma generate

if [ "$1" = "clean" ]; then
    echo "Starting from a clean slate"
    docker compose down
    docker volume rm isthatoutyet-web isthatoutyet-db
    npm i
    export DATABASE_URL="postgresql://postgres:example@localhost:5432/dev-db"
    docker compose up --build --detach
    npx prisma migrate deploy
    docker compose down
    DATABASE_URL="postgresql://postgres:example@db:5432/dev-db"
fi

docker compose up --build --watch