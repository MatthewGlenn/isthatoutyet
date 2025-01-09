import React from 'react';
import ProductView from "./product-view";
import { VideoGameAndRelease } from '@/lib/definitions';

import { ProductViewType } from './enums';

function getReleasesForDay(products: VideoGameAndRelease[], day: string): VideoGameAndRelease[] {
    const daysReleases: VideoGameAndRelease[] = [];
    for (const product of products) {
        for (const release of product.releases) {
            if (release.releaseDate.toDateString() === day &&
                !daysReleases.includes(product)) {
                daysReleases.push(product);
            }
        }
    }
    return daysReleases;
}

const Day: React.FC<{ date:Date, products:VideoGameAndRelease[], viewType:ProductViewType }> = ({ date, products, viewType }) => {
    const day = date.toDateString();
    const daysReleases = getReleasesForDay(products, day)

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'auto' }}>
                {daysReleases.map((product, index) => (
                    <div key={index}>
                        <ProductView viewType={viewType} game={product} date={date} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Day;