import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const SeedData = [
    {
        title: "Adventure Awaits",
        description: "Embark on an epic journey through enchanted forests and mythical lands.",
        releases: [
            {
                releaseDate: "2024-10-07T00:00:00Z",
                platform: "PC"
            },
            {
                releaseDate: "2024-10-10T00:00:00Z",
                platform: "PS5"
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
            },
            {
                releaseDate: "2024-10-09T00:00:00Z",
                platform: "Nintendo Switch"
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
            },
            {
                releaseDate: "2024-10-11T00:00:00Z",
                platform: "Xbox Series X"
            },
            {
                releaseDate: "2024-10-11T00:00:00Z",
                platform: "PC"
            },
            {
                releaseDate: "2024-10-11T00:00:00Z",
                platform: "PlayStation 5"
            },
            {
                releaseDate: "2024-10-11T00:00:00Z",
                platform: "PlayStation 4"
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
    const products: {
        createdAt: Date;
        description: string;
        id: string;
        productTitle: string;
        productType: string;
        updatedAt: Date
    }[] = await prisma.product.createManyAndReturn({
        data: [
        {
            productTitle: SeedData[0].title,
            description: SeedData[0].description,
            productType: "game"
        },
        {
            productTitle: SeedData[1].title,
            description: SeedData[1].description,
            productType: "game"
        },
        {
            productTitle: SeedData[2].title,
            description: SeedData[2].description,
            productType: "game"
        },
        {
            productTitle: SeedData[3].title,
            description: SeedData[3].description,
            productType: "game"
        },
        {
            productTitle: SeedData[4].title,
            description: SeedData[4].description,
            productType: "game"
        },
        {
            productTitle: SeedData[5].title,
            description: SeedData[5].description,
            productType: "game"
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
                    productTitleId: products[index].id,
                }
            })
        })
        index++;
    })

    
    console.log({product: products});
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