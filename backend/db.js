const { sequelize } = require("sequelize");

const dbConnection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnathorized: false,
    },
  },
});

module.exposrts = dbConnection;
