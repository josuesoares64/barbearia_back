"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class BarberService extends Model {
    static associate(models) {
      BarberService.belongsTo(models.User, {
        foreignKey: "barber_id",
      });

      BarberService.belongsTo(models.Service, {
        foreignKey: "service_id",
      });
    }
  }

  BarberService.init(
    {
      barber_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BarberService",
      tableName: "barber_services",
      underscored: true,
      timestamps: false,
    }
  );

  return BarberService;
};
