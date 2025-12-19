"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Client extends Model {
    static associate(models) {
      // Cliente pertence a uma barbearia
      Client.belongsTo(models.Barbershop, {
        foreignKey: "barbershop_id",
      });

      // Cliente pode ter vários agendamentos
      Client.hasMany(models.Appointment, {
        foreignKey: "client_id",
      });
    }
  }

  Client.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Client",
      tableName: "clients",
      underscored: true,
      timestamps: true,
    }
  );

  return Client;
};
