const mongoose = require("mongoose");

// Define the Lead schema
const leadSchema = new mongoose.Schema({
  leadId: {
    type: String,
    required: true,
    unique: true, // Ensures that each lead has a unique ID
  },
  firstName: {
    type: String,
    required: true, // First name is required
  },
  lastName: {
    type: String,
    required: true, // Last name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensures that each email is unique
    match: /.+\@.+\..+/, // Basic email format validation
  },
  phone: {
    type: String,
    required: true, // Phone number is required
  },
  company: {
    type: String,
    required: true, // Company name is required
  },
  status: {
    type: String,
    enum: ["Open", "Contacted", "Qualified", "Converted", "Closed"], // Possible statuses
    default: "Open", // Default status
  },
  source: {
    type: String,
    required: true, // Source is required
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current date
  },
  converted: {
    type: Boolean,
    default: false, // Default to false
  },
});

// Create the Lead model
const Lead = mongoose.model("Lead", leadSchema);

// Export the Lead model
module.exports = Lead;
