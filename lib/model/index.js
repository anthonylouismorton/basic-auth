'use strict'
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('./Users.js');

let DATABASE_URL = 'sqlite:memory' || process.env.DATABASE_URL

const sequelizeInstance = new Sequelize(DATABASE_URL)
const userTable = userModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  user: userTable
};