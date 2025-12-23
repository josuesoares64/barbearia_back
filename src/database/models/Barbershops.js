"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Barbershop extends Model {
    static associate(models) {
      /**
       * Uma barbearia possui vários usuários
       * (donos e barbeiros)
       */
      Barbershop.hasMany(models.User, {
        foreignKey: "barbershop_id",
        as: "users",
      });

      /**
       * Uma barbearia possui vários serviços
       */
      Barbershop.hasMany(models.Service, {
        foreignKey: "barbershop_id",
        as: "services",
      });

      /**
       * Uma barbearia possui vários clientes
       */
      Barbershop.hasMany(models.Client, {
        foreignKey: "barbershop_id",
        as: "clients",
      });

      /**
       * Uma barbearia possui vários agendamentos
       */
      Barbershop.hasMany(models.Appointment, {
        foreignKey: "barbershop_id",
        as: "appointments",
      });
    }
  }

  Barbershop.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Barbershop",
      tableName: "barbershops",
      underscored: true,
    }
  );

  return Barbershop;
};
