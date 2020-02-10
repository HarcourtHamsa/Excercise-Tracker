const express = require('express');
const cors = require('cors');

// This runs our configuration
require('dotenv').config();

// Constants
const app = express();
const PORT = process.env.PORT || 5000;

const excercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/excercises', excercisesRouter);
app.use('/users', usersRouter);


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));