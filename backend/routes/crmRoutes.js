const express = require("express");
const router = express.Router();
const crmController = require("../controllers/crmController"); // Adjust the path as necessary

// Route to add CRM data
router.post("/add", crmController.addCRMData);

// Route to add dummy data
router.post("/add-dummy", crmController.addDummyData);

// Route to fetch stored CRM data
router.get("/fetch", crmController.fetchCRMData);

module.exports = router;
