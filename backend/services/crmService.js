const Lead = require("../models/Lead"); // Import the Lead model
const Campaign = require("../models/Campaign"); // Import the Campaign model
const Contact = require("../models/Contact"); // Import the Contact model

// Add leads to the database
exports.addLeads = async (leads) => {
  try {
    // Insert multiple leads into the database
    return await Lead.insertMany(leads);
  } catch (error) {
    throw new Error(`Failed to add leads: ${error.message}`);
  }
};

// Add campaigns to the database
exports.addCampaigns = async (campaigns) => {
  try {
    // Insert multiple campaigns into the database
    return await Campaign.insertMany(campaigns);
  } catch (error) {
    throw new Error(`Failed to add campaigns: ${error.message}`);
  }
};

// Add contacts to the database
exports.addContacts = async (contacts) => {
  try {
    // Insert multiple contacts into the database
    return await Contact.insertMany(contacts);
  } catch (error) {
    throw new Error(`Failed to add contacts: ${error.message}`);
  }
};

// Fetch all leads from the database
exports.getLeads = async () => {
  try {
    return await Lead.find({});
  } catch (error) {
    throw new Error(`Failed to fetch leads: ${error.message}`);
  }
};

// Fetch all campaigns from the database
exports.getCampaigns = async () => {
  try {
    return await Campaign.find({});
  } catch (error) {
    throw new Error(`Failed to fetch campaigns: ${error.message}`);
  }
};

// Fetch all contacts from the database
exports.getContacts = async () => {
  try {
    return await Contact.find({});
  } catch (error) {
    throw new Error(`Failed to fetch contacts: ${error.message}`);
  }
};
