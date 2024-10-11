import React from 'react';

class ProductTemp {
    title: string;
    releaseDate: Date;
    platform: string;
    platformType: string;
    description: string;

    constructor(title: string, releaseDate: Date, platform: string, platformType: string, description: string) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.platform = platform;
        this.platformType = platformType;
        this.description = description;
    }
}

const testProducts: ProductTemp[] = [
    new ProductTemp('Cyberpunk 2077', new Date('2023-01-01'), 'PC', 'RPG', 'A futuristic open-world RPG.'),
    new ProductTemp('The Last of Us Part II', new Date('2023-02-01'), 'PlayStation', 'Action-Adventure', 'A story-driven action-adventure game.'),
    new ProductTemp('Animal Crossing: New Horizons', new Date('2023-03-01'), 'Nintendo Switch', 'Simulation', 'A relaxing life simulation game.'),
];

function ProductView() {
    const product = testProducts[Math.floor(Math.random() * testProducts.length)];

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Product View</h2>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-400 mb-1">{product.releaseDate.toDateString()}</p>
            <p className="text-gray-400 mb-1">{product.platform}</p>
            <p className="text-gray-400 mb-1">{product.platformType}</p>
            <p className="text-gray-300">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductView;