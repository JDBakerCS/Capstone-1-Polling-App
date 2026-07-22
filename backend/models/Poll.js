const { DataTypes } = require('sequelize')
const db = require("../db")

const Poll = db.define(
    "Poll",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        
        },
    },
    {
        tableName: "polls",
    }
)
module.exports = Poll;