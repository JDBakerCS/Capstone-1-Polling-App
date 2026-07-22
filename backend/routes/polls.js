const express = require("express");
const pollsRouter = express.Router();
const { Poll, Option, Vote } = require("../models");

pollsRouter.get("/", async (req, res, next) => {
  try {
    const allPolls = await Poll.findAll();

    return res.json(allPolls);
  } catch (err) {
    next(err);
  }
});
pollsRouter.get("/:id", async (req, res, next) => {
  try {
    const poll = await Poll.findByPk(req.params.id);
    if (!poll) {
      return res.sendStatus(404);
    }
    res.json(poll);
  } catch (err) {
    next(err);
  }
});

pollsRouter.post("/create", async (req, res, next) => {
  try {
    const { title, description, options } = req.body;
    const newPoll = await Poll.create({ title, description, options });
    options.map((item) => {
      let text = item.text;
      Option.create({ text, pollId: newPoll.id });
    });

    return res.status(201).json(newPoll);
  } catch (err) {
    next(err);
  }
});

pollsRouter.post(":id/vote", async (req, res) => {
  try {
    const { tableName, optionId } = req.body;
    const newVote = await Vote.create({ tableName, optionId });
    const voted = await Vote.findOne({
      where: { optionId: optionId },
    });
    if (!voted) {
      return res.status(404).json();
    } else {
      res.json;
    }
  } catch (err) {
    next(err);
  }
});

pollsRouter.delete("/:id", async (req, res, next) => {
  try {
    const deletePoll = await Poll.findByPk(req.params.id);

    if (!deletePoll) {
      return await res.status(404).json();
    }
    deletePoll.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
pollsRouter.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});
module.exports = pollsRouter;
