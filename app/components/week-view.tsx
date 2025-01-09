import React from 'react';
import DayView from './day-view';
import { VideoGameAndRelease } from '@/lib/definitions';
import { ProductViewType } from './enums';


const days = getDaysInWeek(new Date());

function getDaysInWeek(date: Date): Date[] {
    const days = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Set to the previous Sunday
    for (let i = 0; i <= 6; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        days.push(day);
    }
    return days;
}

function getProductsByDay(products: VideoGameAndRelease[], day: Date): VideoGameAndRelease[] {
    const productsByDay: VideoGameAndRelease[] = [];
    products.forEach(product => {
        product.releases.forEach(release => {
            if (release.releaseDate.toDateString() === day.toDateString()) {
                productsByDay.push(product);
            }
        })
    });
    return productsByDay;
}

const WeekDayView: React.FC<{ products: VideoGameAndRelease[], day: Date }> = ({products, day}) => {
    const productForDay = getProductsByDay(products, day);

    if (productForDay.length === 0) {
        return <h3 className="text-xl font text-white-800 w-20 text-center">{day.toLocaleDateString('en-US', { weekday: 'short' })}</h3>
    } else {
        return (
            <div className="flex flex-col space-y-2">
                <h3 className="text-xl font text-white-800 text-center">{day.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                <DayView date={day} products={productForDay} viewType={ProductViewType.Week} />
            </div>
        );
    }
}

const HeaderView: React.FC = () => {
    const formatDateWithoutYear = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const weekRange = `${formatDateWithoutYear(days[0])} - ${formatDateWithoutYear(days[days.length - 1])}`;
    return (
        <div>
            <h2 className="text-3xl font-bold text-white-600 text-center">Releases This Week</h2>
            <h3 className="text-2xl font-bold text-white-600 text-center">{weekRange}</h3>
        </div>
    );
};

const WeekView: React.FC<{ products: VideoGameAndRelease[] }> = ({ products }) => {
    const days = getDaysInWeek(new Date());
    return (
        <>
            <HeaderView />
            <div className="flex space-x-2 overflow-x-auto snap-x snap-mandatory sm:snap-center">
                {days.map((day, index) => (
                    <div key={index} className="snap-start sm:snap-center">
                        <WeekDayView products={products} day={day} />
                    </div>
                ))}
            </div>
        </>
    );
};


export default WeekView;