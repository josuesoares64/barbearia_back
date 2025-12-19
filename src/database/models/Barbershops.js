"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Barbershop extends Model {
    static associate(models) {
      // Uma barbearia tem vários usuários (barbeiros e dono)
      Barbershop.hasMany(models.User, {
        foreignKey: "barbershop_id",
      });

      // Uma barbearia tem vários serviços
      Barbershop.hasMany(models.Service, {
        foreignKey: "barbershop_id",
      });

      // Uma barbearia tem vários clientes
      Barbershop.hasMany(models.Client, {
        foreignKey: "barbershop_id",
      });

      // Uma barbearia tem vários produtos
      Barbershop.hasMany(models.Product, {
        foreignKey: "barbershop_id",
      });

      // Uma barbearia tem vários agendamentos
      Barbershop.hasMany(models.Appointment, {
        foreignKey: "barbershop_id",
      });
    }
  }

  Barbershop.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
