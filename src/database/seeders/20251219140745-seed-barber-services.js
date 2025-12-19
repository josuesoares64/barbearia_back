'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('barber_services', [
      {
        barber_id: 1,
        service_id: 6,
      },
      {
        barber_id: 1,
        service_id: 8,
      },
      {
        barber_id: 1,
        service_id: 5,
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('barber_services', null, {});
  }
};
