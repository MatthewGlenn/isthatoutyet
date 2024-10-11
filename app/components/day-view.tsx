import React from 'react';
import ProductView from "./product-view";
import { ProductAndRelease } from '@/lib/definitions';

import { ProductViewType } from './enums';

function getReleasesForDay(products: ProductAndRelease[], day: string): ProductAndRelease[] {
    const daysReleases: ProductAndRelease[] = [];
    for (const product of products) {
        for (const release of product.releases) {
            if (release.releaseDate.toDateString() === day) {
                daysReleases.push(product);
            }
        }
    }
    return daysReleases;
}

const Day: React.FC<{ date:Date, products:ProductAndRelease[], viewType:ProductViewType }> = ({ date, products, viewType }) => {
    const day = date.toDateString();
    const daysReleases = getReleasesForDay(products, day)

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'auto' }}>
                {daysReleases.map((product, index) => (
                    <div key={index}>
                        <ProductView viewType={viewType} product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Day;