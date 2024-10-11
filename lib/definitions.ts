
export type Release = {
    releaseDate: Date;
    platform: string;
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
