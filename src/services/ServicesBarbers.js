const { User, Barbershop } = require("../database/models");

class BarbersService {
    async findAllByBarbershopSlug(slug) {
        const barbershop = await Barbershop.findOne({
            where: { slug },
        });

        if (!barbershop) return [];

        return User.findAll({
            where: {
                barbershop_id: barbershop.id,
                role: "OWNER",
                is_active: true,
            },
            attributes: ["id", "username", "role"],
        });
    }
}

module.exports = BarbersService;
