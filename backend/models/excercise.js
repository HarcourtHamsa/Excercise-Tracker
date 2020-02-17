const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "harcourt", "eckankar2757101", {
  define: { timestamps: false },
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(console.log("Database connected successfully! from excercises"))
  .catch(err => console.log(err));

const excerciseSchema = sequelize.define(
  "excercises",
  {
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    desciption: {
      type: Sequelize.CHAR(100),
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  { freezeTableName: true }
);

module.exports = {
  excerciseSchema
};
