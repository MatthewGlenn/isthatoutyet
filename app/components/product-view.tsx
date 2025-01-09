import React from 'react';
import { ProductViewType } from './enums';
import { Release, VideoGameAndRelease} from '@/lib/definitions';

const getColorBasedOnPlatform = (platform: string) => {
    if (platform.includes('PlayStation') || platform.includes('PS')) {
        return '#003791';
    } else if (platform.includes('Xbox')) {
        return '#107C10';
    } else if (platform.includes('PC') || platform.includes('Steam')) {
        return '#000000';
    } else if (platform.includes('Nintendo')) {
        return '#E60012';
    } else if (platform.includes('iOS') || platform.includes('Android') || platform.includes('Mobile')) {
        return '#008080';
    } else if (platform.includes('Meta') || platform.includes('Oculus') || platform.includes('VR') || platform.includes('Quest')) {
        return '#0078D4';
    } else {
        return '#800080';
    }
}

const PlatformView: React.FC<{ platform: string }> = ({ platform }) => {
    const color = getColorBasedOnPlatform(platform);
    return (
        <div style={{ backgroundColor: color }} className="p-2 rounded-md text-white">
            {platform}
        </div>
    );
};

function releasesList(releases: Release[], date?: Date): Release[] {
    if (date) {  
        return releases.filter(release => release.releaseDate.toDateString() === date.toDateString());
    } else {
        return releases;
    }
}


const ReleaseDateView: React.FC<{ viewType: ProductViewType, releases: Release[], date?: Date }> = ({ viewType, releases, date }) => {
    const filteredReleases = releasesList(releases, date);

    if (viewType === ProductViewType.Week) {
        return (
        <div>
            <div>
            {filteredReleases.map((release, index) => (
                <div key={index}><PlatformView platform={release.platform} /></div>
            ))}
            </div>
        </div>
        );
    } else if (viewType === ProductViewType.Month) {
        return (
        <div>
            <div>
                {filteredReleases.map((release, index) => (
                    <div key={index}><PlatformView platform={release.platform} /></div>
                ))}
            </div>
        </div>
        );
    } else {
        return (
        <div>
            <ul className="list-disc list-inside">
            {filteredReleases.map((release, index) => (
                <li key={index}>{release.platform} - {release.releaseDate.toLocaleDateString()}</li>
            ))}
            </ul>
        </div>
        );
    }
};

const ProductView: React.FC<{ viewType: ProductViewType, game: VideoGameAndRelease, date?: Date }> = ({ viewType, game, date }) => {
    return (
        <div className="p-4 bg-gray-900 text-white">
            <div className="bg-gray-800 p-3 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-1">{game.name}</h3>
            <ReleaseDateView viewType={viewType} releases={game.releases} date={date} />
            <p className="text-gray-400 mb-1">Type: {game.productType}</p>
            <p className="text-gray-300 text-sm">{game.description}</p>
            </div>
        </div>
    );
}

export default ProductView;