export type Game = {
    title: string;   
    description: string;
}

export type Release = {
    releaseDate: Date;
    platform: string;
}

export type GameAndRelease = {
    title: string;
    description: string;
    releases: Release[];
}