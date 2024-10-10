import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const games = [
    {
        title: "Adventure Awaits",
        description: "Embark on an epic journey through enchanted forests and mythical lands.",
        releases: [
            {
                releaseDate: "2024-10-07T00:00:00Z",
                platform: "PC"
            }
        ]
    },
    {
        title: "Racing Rivals",
        description: "Challenge your friends in high-speed racing on dynamic tracks.",
        releases: [
            {
                releaseDate: "2024-10-08T00:00:00Z",
                platform: "Xbox One"
            }
        ]
    },
    {
        title: "Mystical Puzzles",
        description: "Solve intricate puzzles to unlock the secrets of an ancient civilization.",
        releases: [
            {
                releaseDate: "2024-10-09T00:00:00Z",
                platform: "Mobile"
            }
        ]
    },
    {
        title: "Galactic Odyssey",
        description: "Explore the universe and engage in epic space battles.",
        releases: [
            {
                releaseDate: "2024-10-10T00:00:00Z",
                platform: "PlayStation 5"
            }
        ]
    },
    {
        title: "Zombie Survival",
        description: "Survive the apocalypse by scavenging for resources and crafting weapons.",
        releases: [
            {
                releaseDate: "2024-10-11T00:00:00Z",
                platform: "Nintendo Switch"
            }
        ]
    },
    {
        title: "Fantasy Realm",
        description: "Dive into a rich, story-driven RPG with stunning graphics.",
        releases: [
            {
                releaseDate: "2024-10-12T00:00:00Z",
                platform: "PC"
            }
        ]
    }
]


async function main() {
    const product = await prisma.product.createManyAndReturn({
        data: [
        {
            productTitle: games[0].title,
            description: games[0].description,
            productType: "game"
        },
        {
            productTitle: games[1].title,
            description: games[1].description,
            productType: "game"
        },
        {
            productTitle: games[2].title,
            description: games[2].description,
            productType: "game"
        },
        {
            productTitle: games[3].title,
            description: games[3].description,
            productType: "game"
        },
        {
            productTitle: games[4].title,
            description: games[4].description,
            productType: "game"
        },
        {
            productTitle: games[5].title,
            description: games[5].description,
            productType: "game"
        },
        ]
    });
    let release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[0].releases[0].platform,
            releaseDate: games[0].releases[0].releaseDate,
            productTitleId: product[0].id,
        }
    });
    release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[1].releases[0].platform,
            releaseDate: games[1].releases[0].releaseDate,
            productTitleId: product[1].id,
        }
    });
    release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[2].releases[0].platform,
            releaseDate: games[2].releases[0].releaseDate,
            productTitleId: product[2].id,
        }
    });
    release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[3].releases[0].platform,
            releaseDate: games[3].releases[0].releaseDate,
            productTitleId: product[3].id,
        }
    });
    release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[4].releases[0].platform,
            releaseDate: games[4].releases[0].releaseDate,
            productTitleId: product[4].id,
        }
    });
    release = await prisma.release.upsert({
        where: { id: "1" },
        update: {},
        create: {
            platform: "PC",
            productType: games[5].releases[0].platform,
            releaseDate: games[5].releases[0].releaseDate,
            productTitleId: product[5].id,
        }
    });
    
    console.log({product, release});
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