const { Router } = require("express");
const BarbershopController = require("../controllers/BarbershopController");
const ServicesController = require("../controllers/ServicesController");
const BarberController = require("../controllers/BarberController");
const BarbershopHoursController = require("../controllers/BarbershopHoursController")
const AvailabilityController = require("../controllers/AvailabilityController")

const router = Router();

router.get("/", BarbershopController.index);
router.get("/:slug", BarbershopController.show);

// sub-recursos da barbearia
router.get("/:slug/services", ServicesController.index);
router.get("/:slug/barbers", BarberController.index);
router.get("/:slug/barbershours", BarbershopHoursController.index);
router.get("/:slug/availability", AvailabilityController.index);

module.exports = router;
