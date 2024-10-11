import React from 'react';

interface WeekViewProps {
    startingDay: number; // 0 for Sunday, 1 for Monday, etc.
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function WeekView({ startingDay }: WeekViewProps) {
    const weekDays = Array.from({ length: 7 }, (_, i) => daysOfWeek[(startingDay + i) % 7]);

    return (
        <div>
            <h2>Week View</h2>
            <ul>
                {weekDays.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>
        </div>
    );
}

export default WeekView;