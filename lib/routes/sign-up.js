'use strict'

const {user} = require('../model')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
// Create a Sequelize model
// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3020/signup username=john password=foo
router.post('/signup', async (req, res) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let userData = req.body;
    let newUser = await user.create({
      username: userData.username,
      password: hashedPassword,
    })
    res.status(201).send(newUser);
  } 
  catch (e) { 
    console.log(e)
    res.status(403).send("Error Creating User"); 
  }
});

module.exports = router;