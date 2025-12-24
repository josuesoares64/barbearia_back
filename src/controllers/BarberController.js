const Controller = require("./controller");
const BarbersService = require("../services/ServicesBarbers");

class BarbersController extends Controller {
    constructor() {
        super(new BarbersService());
    }

    async index(req, res) {
        const { slug } = req.params;

        const barbers = await this.service.findAllByBarbershopSlug(slug);

        return res.json(barbers);
    }
}

module.exports = new BarbersController();
