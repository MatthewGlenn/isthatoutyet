import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getRandomDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 5) + 1;
    today.setDate(today.getDate() + randomDays);
    return today.toISOString();
};

const getRandomName = () => {
    const adjectives = ["Epic", "Mystical", "Galactic", "Zombie", "Fantasy", "Adventure", "Racing"];
    const nouns = ["Journey", "Puzzles", "Odyssey", "Survival", "Realm", "Awaits", "Rivals"];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
};

const SeedData = [
    {
        title: getRandomName(),
        description: "Embark on an epic journey through enchanted forests and mythical lands.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "PC"
            },
            {
                releaseDate: getRandomDate(),
                platform: "PS5"
            }
        ]
    },
    {
        title: getRandomName(),
        description: "Challenge your friends in high-speed racing on dynamic tracks.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "Xbox One"
            }
        ]
    },
    {
        title: getRandomName(),
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
        title: getRandomName(),
        description: "Explore the universe and engage in epic space battles.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "PlayStation 5"
            }
        ]
    },
    {
        title: getRandomName(),
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
        title: getRandomName(),
        description: "Dive into a rich, story-driven RPG with stunning graphics.",
        releases: [
            {
                releaseDate: getRandomDate(),
                platform: "PC"
            }
        ]
    }
];

async function main() {
    const products = await prisma.product.createManyAndReturn({
        data: SeedData.map(seed => ({
            productTitle: seed.title,
            description: seed.description,
            productType: "game"
        }))
    });

    let index = 0;
    for (const seed of SeedData) {
        for (const release of seed.releases) {
            await prisma.release.create({
                data: {
                    platform: release.platform,
                    productType: "game",
                    releaseDate: release.releaseDate,
                    productTitleId: products[index].id,
                }
            });
        }
        index++;
    }

    console.log({ product: products });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });