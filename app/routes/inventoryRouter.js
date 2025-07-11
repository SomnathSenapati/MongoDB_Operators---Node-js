const express = require("express");
const inventoryController = require("../controllers/inventoryController");
const router = express.Router();

// Public Routes
router.post("/add", inventoryController.AddInventory);
router.get("/all", inventoryController.alldata);
router.get("/eq", inventoryController.eq);
router.get("/gt", inventoryController.gt);
router.get("/lt", inventoryController.lt);
router.get("/gte", inventoryController.gte);
router.get("/lte", inventoryController.lte);
router.get("/in", inventoryController.in);
router.get("/ne", inventoryController.ne);
router.get("/nin", inventoryController.nin);
router.get("/regex", inventoryController.regex);
router.get("/text", inventoryController.text);
router.get("/where", inventoryController.where);

module.exports = router;
