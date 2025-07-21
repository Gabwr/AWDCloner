const port = 3011;
const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = require('./Models/databaseSequelize');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('System connected to PostgreSQL Database Succesfully');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
  }
})();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port,() => console.log("System Running in --> "+port));