"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "appointments",
      [
        {
          barbershop_id: 1,
          client_id: 11,
          barber_id: 1,
          service_id: 5,
          appointment_date: "2025-12-24",
          appointment_time: "09:00",
          status: "scheduled",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          barbershop_id: 1,
          client_id: 12,
          barber_id: 1,
          service_id: 8,
          appointment_date: "2025-12-24",
          appointment_time: "10:00",
          status: "scheduled",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          barbershop_id: 1,
          client_id: 11,
          barber_id: 1,
          service_id: 7,
          appointment_date: "2025-12-24",
          appointment_time: "14:00",
          status: "scheduled",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("appointments", null, {});
  },
};
