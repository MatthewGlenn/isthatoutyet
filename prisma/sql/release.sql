CREATE TABLE IF NOT EXISTS "Release"(
    id text NOT NULL,
    "releaseDate" timestamp without time zone NOT NULL,
    platform text NOT NULL,
    "gameTitleId" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp without time zone NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT Release_gameTitleId_fkey FOREIGN key("gameTitleId") REFERENCES "Game"(id)
);