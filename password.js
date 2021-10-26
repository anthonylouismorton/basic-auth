'use strict'

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const username = 'Anthony';
const password = 'password';

const userpass = `${username}:${password}`;

const encoded = base64.encode(userpass)
console.log(encoded)

/**
  header: {
    authorization: Basic QW50aG9ueTpwYXNzd29yZA==
  }
 */

 const decoded = base64.decode(encoded)
 console.log(decoded)

 const [user, pass] = decoded.split(':')
 const complexity = 10;
 bcrypt.hash(pass, complexity).then(hashedPassword =>{
   console.log(hashedPassword);
 })

 let checkpassword = 'password'


 bcrypt.compare(checkpassword, hashedPassword).then(isCorrect => {
   console.log(isCorrect);
 })

 console.log(user, pass)