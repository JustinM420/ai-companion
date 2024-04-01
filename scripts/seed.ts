const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: "Famous People"},
                {name: "Movie Stars"},
                {name: "Musicians"},
                {name: "Games"},
                {name: "Animals"},
                {name: "Philosophy"},
                {name: "Scientisis"},
            ]
        })
    } catch (error) {
        console.log("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
}

main();