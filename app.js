'use strict'

const express = require('express');
const app = express();
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite:memory');
const base64 = require('base-64');
const bcrypt = require('bcrypt')
app.use(express.json());
const User = sequelize.define('users',{
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

User.beforeCreate(async (user) => {
  let encryptedPassword = await bcrypt.hash(user.password, 10);
  user.password = encryptedPassword;
})
app.post('/signin', async (req, res) => { 
  try{
  let authString = req.headers.authorization;
  let encodedUserPassword = authString.split(' ')[1];
  let decodeUserPassword = base64.decode(encodedUserPassword);
  let [user, pass] = decodeUserPassword.split(':');

  let userQuery = await User.findOne({where: {username: user}})
  let isValidPassword = await bcrypt.compare(pass, userQuery.password);
  if(isValidPassword){
    res.send(userQuery)
  }
  else{
    res.status(401).send('user not defined')
  }
  
  }
  catch(e){
    res.status(401).send('Unauthenticated request')
  }
})

app.post('/signup', async (req,res) => {
  let userData = req.body;
  let newUser = await User.create({
    username: userData.username,
    password: userData.password,
  })
  res.send(newUser)
})

sequelize.sync().then(() => {
  app.listen(3000, () => {
  console.log('hitting server');
});
});