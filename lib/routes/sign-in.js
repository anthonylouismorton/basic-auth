'use strict'
const validate = require('../auth/middleware/validate.js');
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const router = express.Router();

// Signin Route -- login with username and password
// test with httpie
// http post :3020/signin -a john:foo
router.post('/signin', validate, async (req, res) => {

  res.send(req.user);

});

module.exports = router;
// try{
//   let authString = req.headers.authorization;
//   let encodedUserPassword = authString.split(' ')[1];
//   let decodeUserPassword = base64.decode(encodedUserPassword);
//   let [user, pass] = decodeUserPassword.split(':');

//   let userQuery = await User.findOne({where: {username: user}})
//   let isValidPassword = await bcrypt.compare(pass, userQuery.password);
//   if(isValidPassword){
//     res.send(userQuery)
//   }
//   else{
//     res.status(401).send('user not defined')
//   }
  
//   }
//   catch(e){
//     res.status(401).send('Unauthenticated request')
//   }