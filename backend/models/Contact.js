const mongoose = require("mongoose");

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  contactId: {
    type: String,
    required: true,
    unique: true, // Ensures that each contact has a unique ID
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
    unique: true, // Ensure unique email addresses
    match: [/.+\@.+\..+/, "Please fill a valid email address"], // Basic email format validation
  },
  phone: {
    type: String,
    required: true, // Phone number is required
  },
  company: {
    type: String,
    required: true, // Company name is required
  },
  position: {
    type: String,
    required: true, // Position is required
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default to current date
  },
});

// Create the Contact model
const Contact = mongoose.model("Contact", contactSchema);

// Export the Contact model
module.exports = Contact;
