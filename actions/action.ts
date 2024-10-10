"use server";

import prisma from '@/lib/db';

export async function getProductByWeek() {
    const firstDay = getUpcomingSunday();
    const lastDay = getLastSunday();

    await prisma.product.findMany({
        include: {
            Release: {
                where: {
                    releaseDate: {
                        lte: firstDay,
                        gte: lastDay
                    }
                }
            }
        }
    });
}

function getUpcomingSunday() : Date {
const date = new Date();
const today = date.getDate();
const currentDay = date.getDay();
const newDate = date.setDate(today - currentDay + 7);
return new Date(newDate);
}

  function getLastSunday() : Date{
const date = new Date();
const today = date.getDate();
const currentDay = date.getDay();
const newDate = date.setDate(today - (currentDay || 7));
return new Date(newDate);
}