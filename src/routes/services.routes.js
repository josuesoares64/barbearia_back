const { Router } = require("express");
const ServicerController = require("../controllers/ServicesController");

const router = Router();

router.get("/", ServicerController.index);

module.exports = router;