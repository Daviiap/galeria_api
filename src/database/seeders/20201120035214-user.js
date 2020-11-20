'use strict';
const bcrypt = require('bcryptjs');
const genderEnum = require('../../app/enums/gender.enum');

const USER = {
  id: 1,
  name: 'User1',
  email: 'user1@email.com',
  age: 19,
  gender: genderEnum.MALE,
  instagram: 'user1instagram',
  createdAt: new Date,
  updatedAt: new Date
};

const USER2 = {
  id: 2,
  name: 'User2',
  email: 'user2@email.com',
  age: 27,
  gender: genderEnum.FEMALE,
  instagram: 'user2instagram',
  createdAt: new Date,
  updatedAt: new Date
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    USER.passwordHash = await bcrypt.hash('senha@123', 5);
    USER2.passwordHash = await bcrypt.hash('senha@123', 5);
    return queryInterface.bulkInsert('Users', [USER, USER2], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
