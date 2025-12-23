const Controller = require("./controller");
const ServicesService = require("../services/ServicesService");

class ServicesController extends Controller {
  constructor() {
    super(new ServicesService());
  }
}

module.exports = new ServicesController();
