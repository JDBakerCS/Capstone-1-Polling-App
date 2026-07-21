const {DataTypes} = require("sequelize")
const db = require("../db")

const Option = db.define(
    "Option",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        pollId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "options",
    }
)
module.exports = Option;