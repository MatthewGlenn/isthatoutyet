import React from 'react';
import { ProductViewType } from './enums';
import { ProductAndRelease, Release } from '@/lib/definitions';

const ReleaseDateView: React.FC<{ viewType: ProductViewType, releases: Release[], date?: Date }> = ({ viewType, releases, date }) => {
    const filteredReleases = date 
        ? releases.filter(release => release.releaseDate.toDateString() === date.toDateString()) 
        : releases;

    if (viewType === ProductViewType.Week) {
        return (
        <div>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform}</li>
            ))}
            </ul>
        </div>
        );
    } else if (viewType === ProductViewType.Month) {
        return (
        <div>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform}</li>
            ))}
            </ul>
        </div>
        );
    } else {
        return (
        <div>
            <h4 className="text-gray-400">Releases:</h4>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform} - {release.releaseDate.toLocaleDateString()}</li>
            ))}
            </ul>
        </div>
        );
    }
};

const ProductView: React.FC<{ viewType: ProductViewType, product: ProductAndRelease, date?: Date }> = ({ viewType, product, date }) => {
    return (
        <div className="p-6 bg-gray-900 text-white">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <ReleaseDateView viewType={viewType} releases={product.releases} date={date} />
            <p className="text-gray-400 mb-1">{product.productType}</p>
            <p className="text-gray-300">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductView;