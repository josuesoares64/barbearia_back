"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Usuário pertence a uma barbearia
      User.belongsTo(models.Barbershop, {
        foreignKey: "barbershop_id",
      });

      // Barbeiro pode atender vários serviços
      User.belongsToMany(models.Service, {
        through: models.BarberService,
        foreignKey: "barber_id",
        otherKey: "service_id",
      });

      // Barbeiro pode ter vários agendamentos
      User.hasMany(models.Appointment, {
        foreignKey: "barber_id",
      });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        // "OWNER" | "BARBER"
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );

  return User;
};
