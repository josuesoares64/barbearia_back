const { Barbershop, Appointment } = require("../database/models");

class AvailabilityService {
  async getAvailability(slug, date) {
    const barbershop = await Barbershop.findOne({
      where: { slug },
    });

    if (!barbershop) {
      throw new Error("Barbershop not found");
    }

    const appointments = await Appointment.findAll({
      where: {
        barbershop_id: barbershop.id,
        appointment_date: date, // 👈 DATE puro (YYYY-MM-DD)
      },
      attributes: ["appointment_time"],
    });

    return appointments;
  }
}

module.exports = new AvailabilityService();
