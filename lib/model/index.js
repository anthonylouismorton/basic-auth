'use strict'
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('./Users.js');

//let DATABASE_URL = 'sqlite:memory' || process.env.DATABASE_URL
let DATABASE_URL = 'postgres://fnbqnixrrabdcm:7adb75582cb6dac316d8811e45100eadd7fde4231fb3675cffacabdfbb492743@ec2-3-212-168-103.compute-1.amazonaws.com:5432/da0b24vp2eu0mt'

const sequelizeInstance = new Sequelize(DATABASE_URL)
const userTable = userModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  user: userTable
};