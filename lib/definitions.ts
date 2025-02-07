import { z } from 'zod';

export type Release = {
    releaseDate: Date;
    platform: string;
    productType: string
    productTitleId: string
}

export class VideoGameAndRelease {
    name: string = "";
    description: string = "";
    productType: string = "";
    releases: Release[] = [];

    constructor(title: string, description: string, productType:string , releases: Release[]) {
        this.name = title;
        this.description = description;
        this.productType = productType;
        this.releases = releases;
    }
}

export type ReleaseWrite = {
    name: string;
    platform: string;
    productType: string;
    releaseDate: Date;
}

export const ReleaseObject = z.object({
    name: z.string(),
    releaseDate: z.string(),
    platform: z.string(),
    productType: z.string()
});

export const VideoGameObject = z.object({
    name: z.string(),
    image: z.string().optional(),
    score: z.number().min(0).max(100).optional(),
    genre: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    sale_price: z.number().optional(),
    onSale: z.boolean().optional(),
    storeUrl: z.string().optional(),
    boxArtUrl: z.string().optional(),
    releases: ReleaseObject.array().optional(),
    datePublished: z.date().optional(),
});

export const VideoGameObjects = VideoGameObject.array();

export const ReleaseObjects = ReleaseObject.array();

export type VideoGame = z.infer<typeof VideoGameObject>;