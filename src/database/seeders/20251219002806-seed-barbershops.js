"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("barbershops", [
      {
        name: "Barbearia do Josué",
        slug: "barbearia-do-josue",
        phone: "11999999999",
        address: "Centro - SP",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("barbershops", null, {});
  },
};
