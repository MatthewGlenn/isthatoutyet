"use server";

import prisma from '@/lib/db';
import { ProductAndRelease } from '@/lib/definitions';

export async function getProductByWeek() : Promise<ProductAndRelease[]> {
    const firstDay = getUpcomingSunday();
    const lastDay = getLastSunday();
     try {
        const products = await prisma.product.findMany({
            include: {
                Release: true
            }
        });

        const data = products.map(prod=>{
            return new ProductAndRelease (
                prod.productTitle,
                prod.description,
                prod.productType,
                prod.Release.map(x=>x),
            )}
        );
        
        return data;
     }
     catch (error) {
        console.log(error);
        return [];
     }
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