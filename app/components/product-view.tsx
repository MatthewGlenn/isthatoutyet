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
            <h4 className="text-gray-400">Releases this week:</h4>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform} - {release.releaseDate.toLocaleDateString()}</li>
            ))}
            </ul>
        </div>
        );
    } else if (viewType === ProductViewType.Month) {
        return (
        <div>
            <h4 className="text-gray-400">Releases this month:</h4>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform} - {release.releaseDate.toLocaleDateString()}</li>
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

// type ProductViewProps = {
//   viewType: ProductViewType;
//   product: ProductAndRelease;
// };

const ProductView: React.FC<{ viewType: ProductViewType, product: ProductAndRelease, date?: Date }> = ({ viewType, product, date }) => {
    
    // Placeholder until we have real data
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const twoDaysFromNow = new Date(today);
    twoDaysFromNow.setDate(today.getDate() + 2);
    const fourteenDaysFromNow = new Date(today);
    fourteenDaysFromNow.setDate(today.getDate() + 14);
    const twoMonthsFromNow = new Date(today);
    twoMonthsFromNow.setMonth(today.getMonth() + 2);

    const releases = new Array<Release>(
        { releaseDate: today, platform: 'Xbox 360' },
        { releaseDate: yesterday, platform: 'Playstation 3' },
        { releaseDate: tomorrow, platform: 'PC' },
        { releaseDate: twoDaysFromNow, platform: 'Nintendo' },
        { releaseDate: fourteenDaysFromNow, platform: 'Xbox One' },
        { releaseDate: twoMonthsFromNow, platform: 'Playstation 5' },
    );
    product.releases = releases;
    // End Placeholder

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