const { Service } = require("../database/models");

class ServicesService {
  async findAll() {
    return Service.findAll({
      where: {
        is_active: true,
      },
    });
  }

  async findOne(where) {
    return Service.findOne({
      where,
    });
  }
}

module.exports = ServicesService;
