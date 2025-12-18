"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("barber_services", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      barber_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      service_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "services",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("barber_services");
  },
};
