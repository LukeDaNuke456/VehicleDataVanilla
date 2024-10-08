const { Sequelize } = require('sequelize');
require('dotenv').config();

const carDataDb = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: console.log
});

module.exports = carDataDb;
