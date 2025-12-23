const dataSource = require("../database/models");

class Services {
  constructor(modelName) {
    this.model = dataSource[modelName];
  }

  async findAll(where = {}, options = {}) {
    return this.model.findAll({
      where,
      ...options
    });
  }

  async findOne(where = {}, options = {}) {
    return this.model.findOne({
      where,
      ...options
    });
  }
}

module.exports = Services;
