import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

function getRandomDate() {
    const date = new Date();
    const today = date.getDate();
    const currentDay = date.getDay();
    const lastSunday = date.setDate(today - (currentDay || 7));
    const upComingSunday = date.setDate(today - currentDay + 7);
    const fromTime = new Date(lastSunday).getTime();
    const toTime = new Date(upComingSunday).getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const SeedData = [
    {
        title: "Adventure Awaits",
        description: "Embark on an epic journey through enchanted forests and mythical lands.",
        releases: [
            {
                platform: "PC",
                releaseDate: getRandomDate(),
            },
            {
                platform: "PS5",
                releaseDate: getRandomDate(),
            }
        ]
    },
    {
        title: "Racing Rivals",
        description: "Challenge your friends in high-speed racing on dynamic tracks.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "Xbox One"
            }
        ]
    },
    {
        title: "Mystical Puzzles",
        description: "Solve intricate puzzles to unlock the secrets of an ancient civilization.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "Mobile"
            },
            {
                releaseDate: getRandomDate(),
                platform: "Nintendo Switch"
            }
        ]
    },
    {
        title: "Galactic Odyssey",
        description: "Explore the universe and engage in epic space battles.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "PlayStation 5"
            }
        ]
    },
    {
        title: "Zombie Survival",
        description: "Survive the apocalypse by scavenging for resources and crafting weapons.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "Nintendo Switch"
            },
            {
                releaseDate: getRandomDate(),
                platform: "Xbox Series X"
            },
            {
                releaseDate: getRandomDate(),
                platform: "PC"
            },
            {
                releaseDate: getRandomDate(),
                platform: "PlayStation 5"
            },
            {
                releaseDate: getRandomDate(),
                platform: "PlayStation 4"
            }
        ]
    },
    {
        title: "Fantasy Realm",
        description: "Dive into a rich, story-driven RPG with stunning graphics.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "PC"
            }
        ]
    }
]


async function main() {
    const videoGames: {
        name: string;
        id: string;
        image: string | null;
        score: number | null;
        genre: string | null;
        description: string | null;
        datePublished: Date | null;
        price: number | null;
        onSale: boolean | null;
        storeUrl: string | null;
        boxArtUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[] = await prisma.videoGame.createManyAndReturn({
        data: [
            {
                name: SeedData[0].title,
                description: SeedData[0].description,
            },
            {
                name: SeedData[1].title,
                description: SeedData[1].description,
            },
            {
                name: SeedData[2].title,
                description: SeedData[2].description,
            },
            {
                name: SeedData[3].title,
                description: SeedData[3].description,
            },
            {
                name: SeedData[4].title,
                description: SeedData[4].description,
            },
            {
                name: SeedData[5].title,
                description: SeedData[5].description,
            },
        ]
    });

    let index = 0;
    SeedData.forEach(seed => {
        seed.releases.forEach(async release => {
            await prisma.release.create({
                data: {
                    platform: release.platform,
                    productType: "game",
                    releaseDate: release.releaseDate,
                    productTitleId: videoGames[index].id,
                }
            })
        })
        index++;
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })