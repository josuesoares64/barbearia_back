const AvailabilityService = require("../services/AvailabilityService");

class AvailabilityController {
  async index(req, res) {
    try {
      const { slug } = req.params;
      const { date } = req.query;

      if (!date) {
        return res.status(400).json({ error: "date is required" });
      }

      const availability = await AvailabilityService.getAvailability(slug, date);

      return res.json(availability);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new AvailabilityController();
