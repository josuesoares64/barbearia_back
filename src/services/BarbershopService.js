const Services = require("./Services");

class BarbershopService extends Services {
  constructor() {
    super("Barbershop");
  }

  async pegarBarbeariaPorSlug(slug) {
    return this.findOne({
      slug: slug
    });
  }

  async listarBarbearias() {
    return this.findAll();
  }
}

module.exports = new BarbershopService();
