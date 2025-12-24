"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("barbershop_hours", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      barbershop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "barbershops",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      weekday: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "0 = domingo, 1 = segunda, ..., 6 = sábado",
      },

      open_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },

      close_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("barbershop_hours");
  },
};
