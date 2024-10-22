// models/ETLData.js
const mongoose = require("mongoose");

// Define the schema for ETL data
const ETLDataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true, // Type of the processed data (e.g., 'leads', 'campaigns')
  },
  processedData: {
    type: Object,
    required: true, // Store the processed data as an object
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

// Create the model from the schema
const ETLData = mongoose.model("ETLData", ETLDataSchema);

module.exports = ETLData;
