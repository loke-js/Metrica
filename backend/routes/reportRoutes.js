// routes/reportRoutes.js
const express = require("express");
const reportController = require("../controllers/reportController");

const router = express.Router();

// Route to generate reports based on processed ETL data
router.get("/:reportType", reportController.generateReports); // reportType can be 'leads' or 'campaigns'

module.exports = router;
