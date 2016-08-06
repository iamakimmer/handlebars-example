'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      title: 'Javascript',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'HTML',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'CSS',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Database',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
