const Services = require("./Services");

class BarbershopHoursService extends Services {
  constructor() {
    super("BarbershopHour"); // ✅ nome correto do MODEL
  }

  async listarPorBarbershopId(barbershop_id) {
    return this.findAll({
      barbershop_id,
    });
  }
}

module.exports = new BarbershopHoursService(); // ✅ exporta instância
