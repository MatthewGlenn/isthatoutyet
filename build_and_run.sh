#!/bin/sh
if [ "$1" = "clean" ]; then
    echo "Starting from a clean slate"
    docker compose down
    docker volume rm isthatoutyet-web isthatoutyet-db
    npm i
    export DATABASE_URL="postgresql://postgres:example@localhost:5432/dev-db"
    echo "Deploy IsThatOutYet DB"
    docker compose -f "local-db-compose.yml" up --build --detach 

    echo "Deploy IsThatOutYet"
    docker compose up --build --detach
    
    npx prisma migrate deploy
    docker compose down
    DATABASE_URL="postgresql://postgres:example@db:5432/dev-db"
fi

docker compose up --build --watch