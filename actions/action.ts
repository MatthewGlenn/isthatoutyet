"use server";

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addGame(formData: FormData) {
    await prisma.game.create({
        data: {
            title: formData.get("title") as string,
            description: "An arcade shooter",
        },
    });

    revalidatePath("/");
}