import { z } from 'zod';

export type Release = {
    releaseDate: Date;
    platform: string;
    productType: string
    productTitleId: string
}

export class ProductAndRelease {
    title: string = "";
    description: string = "";
    productType: string = "";
    releases: Release[] = [];

    constructor(title: string, description: string, productType:string , releases: Release[]) {
        this.title = title;
        this.description = description;
        this.productType = productType;
        this.releases = releases;
    }
}

export type Product = {
    productTitle: string
    productType: string
    description: string
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

const ReleaseObject = z.object({
    releaseDate: z.date(),
    platform: z.string(),
    productType: z.string(),
    productTitleId: z.string(),
}).optional();

export const VideoGameObject = z.object({
    name: z.string(),
    image: z.string().optional(),
    score: z.number().min(0).max(100).optional(),
    genre: z.string(),
    description: z.string().optional(),
    price: z.number().optional(),
    sale_price: z.number().optional(),
    onSale: z.boolean(),
    storeUrl: z.string().optional(),
    boxArtUrl: z.string().optional(),
    releases: ReleaseObject.array().optional(),
    datePublished: z.date().optional(),
    platform: z.string().array().optional()
});

export const VideoGameObjects = VideoGameObject.array();

export type VideoGame = z.infer<typeof VideoGameObject>;