const express = require("express");
const barbershopRoutes = require("./routes/barbershop.routes");

const app = express();

app.use(express.json());

// rota base
app.use("/barbershop", barbershopRoutes);

module.exports = app;
