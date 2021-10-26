'use strict'
const {start} = require('./lib/server.js')
const app = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const {db} = require('./lib/model/index.js')

db.sync()
.then(() => {
  start(PORT)
})