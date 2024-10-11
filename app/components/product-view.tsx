import React from 'react';
import { ProductViewType } from './enums';
import { ProductAndRelease, Release } from '@/lib/definitions';

type ReleaseDateViewProps = {
    releases: Release[];
};

const ReleaseDateView: React.FC<ReleaseDateViewProps> = ({ releases }) => {
    return (
        <>
            <p>Hello - {releases.length}</p>
            {releases.map((release, index) => (
                <p key={index} className="text-gray-400 mb-1">{release.releaseDate.toDateString()} - {release.platform}</p>
            ))}
        </>
    );
  };

type ProductViewProps = {
  viewType: ProductViewType;
  product: ProductAndRelease;
};

const ProductView: React.FC<ProductViewProps> = ({ viewType, product }) => {
    if (viewType === ProductViewType.Month) {
        return (
            <div className="p-6 bg-gray-900 text-white">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-1">{product.productType}</p>
                <p className="text-gray-300">{product.description}</p>
                </div>
            </div>
        );
    }else if (viewType === ProductViewType.Week) {
        return (
            <div className="p-6 bg-gray-900 text-white">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <ReleaseDateView releases={product.releases} />
                <p className="text-gray-400 mb-1">{product.productType}</p>
                <p className="text-gray-300">{product.description}</p>
                </div>
            </div>
        );
    }else if (viewType === ProductViewType.ProductPage) {
        return (
            <div className="p-6 bg-gray-900 text-white">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                {/* <p className="text-gray-400 mb-1">{product.releases[0].releaseDate.toDateString()}</p>
                <p className="text-gray-400 mb-1">{product.releases[0].platform}</p> */}
                <p className="text-gray-400 mb-1">{product.productType}</p>
                <p className="text-gray-300">{product.description}</p>
                </div>
            </div>
        );
    }else {
        return null;
    }
}

export default ProductView;