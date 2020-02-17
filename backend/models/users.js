const Sequelize = require("sequelize");

// Database, username, password
const sequelize = new Sequelize("postgres", "harcourt", "eckankar2757101", {
  host: "localhost",
  dialect: "postgres",
  define: { timestamps: false }
});

// Defining my schema
const userSchema = sequelize.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = {
  userSchema
};
