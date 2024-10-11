import React from 'react';

interface DayProps {
    date: Date;
}

const Day: React.FC<DayProps> = ({ date }) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();

    return (
        <div>
            <h2>{day}</h2>
            <p>{`${month} ${dayNumber}, ${year}`}</p>
        </div>
    );
};

export default Day;