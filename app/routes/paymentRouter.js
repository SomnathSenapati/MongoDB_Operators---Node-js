const express = require("express");
const PaymentController = require("../controllers/PaymentController");
const router = express.Router();

// Public Routes
router.post("/add", PaymentController.Addpayment);
router.get("/all", PaymentController.alldata);
module.exports = router;