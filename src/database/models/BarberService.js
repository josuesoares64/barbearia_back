"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class BarberService extends Model {
    static associate(models) {
      // tabela de ligação normalmente não precisa de relacionamentos próprios
    }
  }

  BarberService.init(
    {
      barber_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      service_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BarberService",
      tableName: "barber_services",
      underscored: true,
      timestamps: false, // essa tabela não precisa de created_at
    }
  );

  return BarberService;
};
