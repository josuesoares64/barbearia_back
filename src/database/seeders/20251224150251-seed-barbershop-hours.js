"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // ⚠️ ID da barbearia (confirme no banco)
    const barbershopId = 1;

    const hours = [];

    // Segunda (1) até sexta (5)
    for (let weekday = 1; weekday <= 5; weekday++) {
      hours.push({
        barbershop_id: barbershopId,
        weekday,
        open_time: "09:00",
        close_time: "18:00",
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert("barbershop_hours", hours);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("barbershop_hours", {
      barbershop_id: 1,
    });
  },
};
