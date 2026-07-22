require("dotenv").config();

const db = require("./db")
const { Poll, Option, Vote } = require("./models");

async function seedDataBase() {
    try {
        await db.authenticate();
        await db.sync({ force: true })

        const musicPoll = await Poll.create({
            title: "What makes a great song?",
            description: "Choose the part of a song that matters most to you.",
        });

        const musicOptions = await Option.bulkCreate(
            [
                {
                    text: "A memerable melody",
                    pollId: musicPoll.id,
                },
                {
                    text: "Meaningfull lyrics",
                    pollId: musicPoll.id,
                },
                {
                    text: "A strong beat or groove",
                    pollId: musicPoll.id,
                },
                {
                    text: "Great musicianship",
                    pollId: musicPoll.id,
                },
            ],
            { returning: true }
        );

        // votes

        await Vote.bulkCreate([
            { optionId: musicOptions[0].id },
            { optionId: musicOptions[0].id },
            { optionId: musicOptions[0].id },
            { optionId: musicOptions[1].id },
            { optionId: musicOptions[1].id },
            { optionId: musicOptions[2].id },
            { optionId: musicOptions[2].id },
            { optionId: musicOptions[3].id },
        ]);

        // poll 2

        const learningPoll = await Poll.create({
            title: "How do you learn somthing new best?",
            description: "Choose the learning style that works best for you.",
        });

        const learningOptions = await Option.bulkCreate(
            [
                {
                    text: "Building a project",
                    pollId: learningPoll.id,
                },
                {
                    text: "Watching someone demostrate it",
                    pollId: learningPoll.id,
                },
                {
                    text: "Reading instuctions",
                    pollId: learningPoll.id,
                },
                {
                    text: "Working through examples",
                    pollId: learningPoll.id,
                },
            ],
            { returning: true }
        );

        // votes

        await Vote.bulkCreate([
            { optionId: learningOptions[0].id },
            { optionId: learningOptions[0].id },
            { optionId: learningOptions[0].id },
            { optionId: learningOptions[0].id },
            { optionId: learningOptions[1].id },
            { optionId: learningOptions[1].id },
            { optionId: learningOptions[2].id },
            { optionId: learningOptions[3].id },
            { optionId: learningOptions[3].id },
        ]);

        // poll 3

        const freeTimePoll = await Poll.create({
            title: "Whats your ideal way to spend a free evening?",
            description: "Pick the option that sounds most relaxing.",
        });

        const freeTimeOptions = await Option.bulkCreate(
            [
                {
                    text: "Playing videogames",
                    pollId: freeTimePoll.id,
                },
                {
                    text: "Watching a movie or tv show",
                    pollId: freeTimePoll.id,
                },
                {
                    text: "Making or listening to musc",
                    pollId: freeTimePoll.id,
                },
                {
                    text: "Cooking a good meal",
                    pollId: freeTimePoll.id,
                },
            ],
            { returning: true }
        );

        // votes

        await Vote.bulkCreate([
            { optionId: freeTimeOptions[0].id },
            { optionId: freeTimeOptions[0].id },
            { optionId: freeTimeOptions[1].id },
            { optionId: freeTimeOptions[1].id },
            { optionId: freeTimeOptions[1].id },
            { optionId: freeTimeOptions[2].id },
            { optionId: freeTimeOptions[2].id },
            { optionId: freeTimeOptions[3].id },
        ]);
    } catch (error) {
        console.error("seed Failed", error);
    } finally {
        await db.close();
    }
}
seedDataBase();
