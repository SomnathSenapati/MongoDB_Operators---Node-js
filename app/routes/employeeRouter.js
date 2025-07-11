const express = require("express");
const EmployeeController = require("../controllers/EmployeeController");
const router = express.Router();

// Public Routes
router.post("/add", EmployeeController.AddEmployee);
router.get("/all", EmployeeController.alldata);
router.get("/and", EmployeeController.and);
router.get("/or", EmployeeController.or);
router.get("/nor", EmployeeController.nor);
router.get("/not", EmployeeController.not);
router.get("/exists", EmployeeController.exists);
router.get("/type", EmployeeController.type);
router.get("/mod", EmployeeController.mod);

module.exports = router;
