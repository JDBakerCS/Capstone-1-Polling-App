const Poll = require("./Poll");
const Option = require("./Option");
const Vote = require("./Vote");

// One poll can contain many answer options.
Poll.hasMany(Option, {
  foreignKey: "pollId",
  as: "options",
  onDelete: "CASCADE",
});

// Each option belongs to one poll.
Option.belongsTo(Poll, {
  foreignKey: "pollId",
  as: "poll",
});

// One option can receive many individual votes.
Option.hasMany(Vote, {
  foreignKey: "optionId",
  as: "votes",
  onDelete: "CASCADE",
});

// Each vote belongs to one option.
Vote.belongsTo(Option, {
  foreignKey: "optionId",
  as: "option",
});

module.exports = {
  Poll,
  Option,
  Vote,
};