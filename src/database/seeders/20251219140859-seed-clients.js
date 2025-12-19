'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('clients', [
      {
        barbershop_id: 1,
        first_name: 'João',
        last_name: 'Silva',
        phone: '11988887777',
        created_at: new Date(),
      },
      {
        barbershop_id: 1,
        first_name: 'Maria',
        last_name: 'Oliveira',
        phone: '11977776666',
        created_at: new Date(),
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
