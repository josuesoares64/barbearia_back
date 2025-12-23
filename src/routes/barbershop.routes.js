const { Router } = require("express");
const barbershopController = require("../controllers/BarbershopController");

const router = Router();

router.get("/", barbershopController.index);
router.get("/:slug", barbershopController.show);

module.exports = router;
