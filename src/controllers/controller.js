class Controller {
  constructor(service) {
    this.service = service;

    // garante o this correto
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
  }

  async index(req, res) {
    try {
      const registros = await this.service.findAll();
      return res.status(200).json(registros);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar registros" });
    }
  }

  async show(req, res) {
    try {
      const { slug } = req.params;

      const registro = await this.service.pegarBarbeariaPorSlug(slug);

      if (!registro) {
        return res.status(404).json({ error: "Registro não encontrado" });
      }

      return res.status(200).json(registro);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
