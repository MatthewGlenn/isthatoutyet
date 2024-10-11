import React from 'react';
import DayView from './day-view';
import { ProductAndRelease } from '@/lib/definitions';
import { ProductViewType } from './enums';


const WeekView: React.FC<{ products: ProductAndRelease[] }> = ({ products }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white-600">Releases This Week</h2>
            <div className="flex space-x-0">
                {products.map((product, index) => (
                    <div key={index}>
                        <DayView date={new Date()} products={products} viewType={ProductViewType.Week} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeekView;