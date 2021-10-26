'use strict';

const Users = (sequelizeInstance, DataTypes) => sequelizeInstance.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Users;

