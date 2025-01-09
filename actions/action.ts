"use server";

import prisma from '@/lib/db';
import { VideoGame, VideoGameAndRelease} from '@/lib/definitions';
import { GameUS } from 'nintendo-switch-eshop';
import { DateTime } from 'luxon';

const noDate = DateTime.fromMillis(0).toString();

export async function getProductByWeek() : Promise<VideoGameAndRelease[]> {
    const firstDay = getLastSunday();
    const lastDay = getUpcomingSunday();
     try {
        const games = await prisma.videoGame.findMany({
            include: {
                Release: true
            },
            where: {
              Release: {
                  some: {
                      releaseDate: {
                          lte: lastDay,
                          gte: firstDay
                      }

                  }
              }
            }
        });

        let data = games.map(game=>{
            return new VideoGameAndRelease (
                game.name,
                (game.description ?? ""),
                "VideoGame",
                game.Release.map(x=>x),
            )}
        );

        if(data.length==0) {
            data = [{
                name: 'no game games found',
                description: 'no games found',
                productType: 'game',
                releases: []
            }];
        }

        return data;
     }
     catch (error) {
        console.log(error);
        return [];
     }
}



export async function loadNintendoGamesFromEShop(nintendoGamesList : GameUS[]) {
    try {

        const nintendoGames = nintendoGamesList.map((nin) => ({
            productTitle: nin.title,
            productType: 'game',
            description: nin.description
        }));

        const ids = await prisma.product.createManyAndReturn({
            data: nintendoGames
        });

        const releases = ids.map((game) => {
            const nin = nintendoGamesList.find(x=> x.title === game.productTitle) ||
                {
                    platform: 'nintendo',
                    releaseDateDisplay: noDate
                }

            const day = DateTime.fromISO(nin.releaseDateDisplay);
            const validDay = day.isValid ? day.toString() : noDate;

                return {
                    platform: !nin.platform ? 'nintendo' : nin.platform,
                    productTitleId: game.id,
                    productType: 'game',
                    releaseDate: validDay
                };
            }
        );

        await prisma.release.createMany({
            data: releases
        });

        return `Indexed ${ids.length} nintendo games`;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export async function checkIfDatabaseLoaded() : Promise<boolean> {
    return await prisma.product.count() > 12;
}

export async function loadDatafromScrapper(videoGame: VideoGame) {
    try {
        const unique = await prisma.videoGame.findFirst({
            where: { name: videoGame.name},
            select: { id: true }
        });

        if(unique !== null) {
            await prisma.videoGame.update({
                where: {
                    id: unique.id
                },
                data: {
                    name: videoGame.name,
                    description: videoGame.description,
                    boxArtUrl: videoGame.boxArtUrl,
                    genre: videoGame.genre,
                    image: videoGame.image,
                    onSale: videoGame.onSale,
                    price: videoGame.price,
                    datePublished: videoGame.datePublished,
                    score: videoGame.score,
                    storeUrl: videoGame.storeUrl
                }
            });

            // const release: Release = {
            //     platform: videoGame.platform?.[0].toString(),
            //     productTitleId: unique.id,
            //     productType: "Videogame",
            //     ReleaseDate: videoGame.datePublished
            // }

            // await prisma.release.create({
            //     data:
            // })
            return;
        }

        await prisma.videoGame.create({
            data: {
                name: videoGame.name,
                description: videoGame.description,
                boxArtUrl: videoGame.boxArtUrl,
                genre: videoGame.genre,
                image: videoGame.image,
                onSale: videoGame.onSale,
                price: videoGame.price,
                datePublished: videoGame.datePublished,
                score: videoGame.score,
                storeUrl: videoGame.storeUrl
            },
            select: {
                id: true
            }
        });
    }
    catch (error) {
        console.log(error);

    }
}

export async function loadMultipleDatafromScrapper(videoGames: VideoGame[]) {
    try {

        const filters = videoGames.map(game=>game.name);

        const records = await prisma.videoGame.findMany({
                where: {
                    ...(filters
                    ? {
                        OR: [ {
                            name: {
                                in: filters
                            }
                        }]
                        }
                    : {})
                },
            });

        if(records !== null) {
            const toBeDeleted = records.map(rec=>rec.id);
            await prisma.videoGame.deleteMany({
                where: {
                    id: {
                        in: toBeDeleted
                    }
                }
            })
        }

        await prisma.videoGame.createMany({
            data: videoGames
        });
    }
    catch (error) {
        console.log(error);

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