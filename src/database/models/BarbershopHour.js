"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class BarbershopHour extends Model {
    static associate(models) {
      BarbershopHour.belongsTo(models.Barbershop, {
        foreignKey: "barbershop_id",
      });
    }
  }

  BarbershopHour.init(
    {
      weekday: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      open_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      close_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BarbershopHour",
      tableName: "barbershop_hours",
      underscored: true,
    }
  );

  return BarbershopHour;
};
