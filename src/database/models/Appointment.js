"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Appointment extends Model {
    static associate(models) {
      // Agendamento pertence a uma barbearia
      Appointment.belongsTo(models.Barbershop, {
        foreignKey: "barbershop_id",
      });

      // Agendamento pertence a um cliente
      Appointment.belongsTo(models.Client, {
        foreignKey: "client_id",
      });

      // Agendamento pertence a um barbeiro
      Appointment.belongsTo(models.User, {
        foreignKey: "barber_id",
      });

      // Agendamento pertence a um serviço
      Appointment.belongsTo(models.Service, {
        foreignKey: "service_id",
      });
    }
  }

  Appointment.init(
    {
      appointment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      appointment_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "scheduled",
        // scheduled | confirmed | canceled | completed
      },
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointments",
      underscored: true,
    }
  );

  return Appointment;
};
