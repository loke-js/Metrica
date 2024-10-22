const express = require("express");
const router = express.Router();
const etlController = require("../controllers/etlController"); // Adjust the path as necessary

// Route to run the ETL process
router.post("/run", etlController.runETL);

module.exports = router;
