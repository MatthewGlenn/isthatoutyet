CREATE TABLE IF NOT EXISTS "Game"(
    id text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp without time zone NOT NULL,
    PRIMARY KEY(id)
);

