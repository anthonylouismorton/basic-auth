'use strict'

const invalidUser = (err, req, res, next) => {
  res.status(500).send(err);
  res.end();
}

module.exports = invalidUser;