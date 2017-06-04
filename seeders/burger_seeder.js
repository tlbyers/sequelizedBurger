'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert('burgers', [
      {burger_name: "Bacon Cheeseburger", devoured: false, date: new Date(), updatedAt: new Date()},
      {burger_name: "Bacon and Bleu Cheesburger", devoured: false, date: new Date(), updatedAt: new Date()},
      {burger_name: "Burger Deluxe", devoured: false, date: new Date(), updatedAt: new Date()},
      {burger_name: "Buffalo Burger", devoured: false, date: new Date(), updatedAt: new Date()},
      {burger_name: "Veggie Burger", devoured: false, date: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
    
  }

}