'use strict';

// 3rd Party Resources
const express = require('express');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const invalidUsers = require('./auth/middleware/invalid-user.js');
const signUp = require('./routes/sign-up.js');
const signIn = require('./routes/sign-in.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(signUp);
app.use(signIn);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// make sure our tables are created, start up the HTTP server.
app.use(invalidUsers)
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server is up'))
  }
}