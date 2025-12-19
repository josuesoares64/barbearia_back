'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('services', [
      {
        barbershop_id: 1,
        name: 'Corte Masculino',
        price: 35.00,
        duration_minutes: 30,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        barbershop_id: 1,
        name: 'Barba',
        price: 25.00,
        duration_minutes: 20,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        barbershop_id: 1,
        name: 'Corte + Barba',
        price: 55.00,
        duration_minutes: 50,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('services', null, {});
  }
};
