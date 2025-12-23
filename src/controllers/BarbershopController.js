const Controller = require('./controller');
const BarbershopService = require('../services/BarbershopService');

class BarbershopController extends Controller {
  constructor() {
    super(BarbershopService);
  }
}

module.exports = new BarbershopController();
