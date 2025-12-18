"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("clients", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      barbershop_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "barbershops",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("clients");
  },
};
