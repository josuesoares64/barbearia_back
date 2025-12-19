"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Service extends Model {
    static associate(models) {
      // Serviço pertence a uma barbearia
      Service.belongsTo(models.Barbershop, {
        foreignKey: "barbershop_id",
      });

      // Serviço pode ser atendido por vários barbeiros
      Service.belongsToMany(models.User, {
        through: models.BarberService,
        foreignKey: "service_id",
        otherKey: "barber_id",
      });

      // Serviço pode estar em vários agendamentos
      Service.hasMany(models.Appointment, {
        foreignKey: "service_id",
      });
    }
  }

  Service.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
      underscored: true,
    }
  );

  return Service;
};
