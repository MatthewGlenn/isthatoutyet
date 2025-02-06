"use server";

import prisma from '@/lib/db';
import { VideoGame, VideoGameAndRelease, Release } from '@/lib/definitions';
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

            const releases = videoGame.releases?.map(game => {
                return {
                    platform: game?.platform ?? "no platform",
                    productTitleId: unique.id,
                    productType: "game",
                    releaseDate: game?.releaseDate ?? noDate
                }
            }) ?? [];


            if(releases.length > 0) {
                await prisma.release.createMany({
                    data: releases
                });
            }
            return;
        }

        const id = await prisma.videoGame.create({
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
        const releases = videoGame.releases?.map(game => {
            return {
                platform: game?.platform ?? "no platform",
                productTitleId: id.id,
                productType: "game",
                releaseDate: game?.releaseDate ?? noDate
            }
        }) ?? [];


        if(releases.length > 0) {
            await prisma.release.createMany({
                data: releases
            });
        }
        return;

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

        const ids = await prisma.videoGame.createManyAndReturn({
            data: videoGames
        });

        const releases: Release[] = [];
        ids.forEach((game) => {
            const vid = videoGames.find(x=>x.name == game.name) ?? {
                releases: []
            };
            const arr : Release[] = vid.releases?.map((x) => {
                const date = x?.releaseDate ? new Date(x.releaseDate)  :  new Date(noDate);
                const rel : Release = {
                    platform: x?.platform ?? "no platform",
                    productTitleId: game.id,
                    productType: "game",
                    releaseDate: date
                };
                return rel;
            }) ?? [];

            if(arr.length > 0) {
                arr.forEach(x => releases.push(x));
            }

        });
        if(releases.length > 0) {
            await prisma.release.createMany({
                data: releases
            });
        }
        return;
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