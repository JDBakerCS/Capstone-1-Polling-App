const { DataTypes } = require("sequelize");
const db = require("../db");

const Vote = db.define(
  "Vote",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    optionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "votes",
  }
);

module.exports = Vote;