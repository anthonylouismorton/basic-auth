 'use strict'

 const {user} = require('../../model')
 const bcrypt = require('bcrypt')
 const base64 = require('base-64');
 
 /*
    Now that we finally have username and password, let's see if it's valid
    1. Find the user in the database by username
    2. Compare the plaintext password we now have against the encrypted password in the db
       - bcrypt does this by re-encrypting the plaintext password and comparing THAT
    3. Either we're valid or we throw an error
  */
 const validate = async (req, res, next) => {
   console.log('in validate')
    try {
      console.log(req.headers.authorization)
      let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
      let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
      let decodedString = base64.decode(encodedString); // "username:password"
      let [username, password] = decodedString.split(':'); // username, password
      const validUser = await user.findOne({ where: { username: username } });
      const valid = await bcrypt.compare(password, validUser.password);
      if (valid) {
        req.user = validUser
        res.status(200);
        next();
      }
    } 
    catch (err){ 
      console.log(err)
      next('Invalid Login')
    }
  }

  module.exports = validate;