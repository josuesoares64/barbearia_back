const Controller = require("./controller");
const BarbershopHoursService = require("../services/ServiceBarbershopHours");
const { Barbershop } = require("../database/models");

class BarbershopHoursController extends Controller {
  constructor() {
    super(BarbershopHoursService); // ✅ SEM new
  }

  async index(req, res) {
    try {
      const { slug } = req.params;

      const barbershop = await Barbershop.findOne({
        where: { slug },
      });

      if (!barbershop) {
        return res.status(404).json({ error: "Barbearia não encontrada" });
      }

      const hours = await BarbershopHoursService.listarPorBarbershopId(
        barbershop.id
      );

      return res.status(200).json(hours);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar horários" });
    }
  }
}

module.exports = new BarbershopHoursController();
