"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
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

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },

      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
    await queryInterface.dropTable("products");
  },
};
