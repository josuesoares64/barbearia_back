const { Router } = require("express");

const barbershopRoutes = require("./barbershop.routes");
// futuramente:
// const userRoutes = require("./user.routes");
const serviceRoutes = require("./services.routes");

const router = Router();

router.use("/barbershops", barbershopRoutes);
// router.use("/users", userRoutes);
router.use("/services", serviceRoutes);

module.exports = router;
