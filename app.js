const express = require("express");
require("dotenv").config();
const dbConfig = require("./app/config/dbConfig");
const cors = require("cors")
const app = express();
dbConfig();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is MY backend");
});

//routes
const inventoryRouter = require("./app/routes/inventoryRouter");
app.use("/api/inventory", inventoryRouter);

module.exports = app;
