"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("appointments", {
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

      client_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "clients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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

      appointment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      appointment_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "scheduled", 
        // scheduled | confirmed | canceled | completed
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
    await queryInterface.dropTable("appointments");
  },
};
