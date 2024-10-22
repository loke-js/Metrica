const crmService = require("../services/crmService");
const { leads, campaigns, contacts } = require("../data/dummyData"); // Import dummy data

// Add CRM data from the request body to the database
exports.addCRMData = async (req, res) => {
  try {
    const { leads, campaigns, contacts } = req.body;
    await crmService.addLeads(leads);
    await crmService.addCampaigns(campaigns);
    await crmService.addContacts(contacts);
    res.status(201).json({ message: "CRM data added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Insert dummy data into the database
exports.addDummyData = async (req, res) => {
  try {
    await crmService.addLeads(leads); // Insert dummy leads
    await crmService.addCampaigns(campaigns); // Insert dummy campaigns
    await crmService.addContacts(contacts); // Insert dummy contacts
    res.status(201).json({ message: "Dummy CRM data added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch stored CRM data from the database
exports.fetchCRMData = async (req, res) => {
  try {
    const leads = await crmService.getLeads();
    const campaigns = await crmService.getCampaigns();
    const contacts = await crmService.getContacts();
    res.status(200).json({ leads, campaigns, contacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
