const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const { DB_PASSWORD, DB_USERNAME } = require("./config");

const client = new Client({
  user: DB_USERNAME,
  host: "localhost",
  database: "postgres",
  password: DB_PASSWORD,
  port: "5432"
});

// Constants
const app = express();
const PORT = process.env.PORT || 5000;

const excercisesRouter = require("./routes/excercises");
const usersRouter = require("./routes/users");

// Middlewares
app.use(cors());
app.use(express.json({ urlEncoded: true }));
app.use(bodyParser());

app.use("/excercises", excercisesRouter);
app.use("/users", usersRouter);

client.connect(err => {
  console.log(err ? err.stack : "Database server running!");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
