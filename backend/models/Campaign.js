const mongoose = require("mongoose");

// Define the Campaign schema
const campaignSchema = new mongoose.Schema({
  campaignId: {
    type: String,
    required: true,
    unique: true, // Ensures that each campaign has a unique ID
  },
  name: {
    type: String,
    required: true, // Campaign name is required
  },
  type: {
    type: String,
    required: true, // Campaign type is required
    enum: ["Email", "Social Media", "Webinar", "Print"], // Possible types
  },
  status: {
    type: String,
    required: true, // Status is required
    enum: ["Active", "Completed", "Paused"], // Possible statuses
  },
  startDate: {
    type: Date,
    required: true, // Start date is required
  },
  endDate: {
    type: Date,
    required: true, // End date is required
  },
  budget: {
    type: Number,
    required: true, // Budget is required
    min: 0, // Budget should not be negative
  },
  leadsGenerated: {
    type: Number,
    required: true, // Leads generated is required
    min: 0, // Leads generated should not be negative
  },
  leadsConverted: {
    type: Number,
    required: true, // Leads converted is required
    min: 0, // Leads converted should not be negative
  },
});

// Create the Campaign model
const Campaign = mongoose.model("Campaign", campaignSchema);

// Export the Campaign model
module.exports = Campaign;
