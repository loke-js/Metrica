const crmService = require("../services/crmService");
const etlService = require("../services/etlService");

// Run the ETL process for both leads and campaigns, fetch data from DB, process it, and send notifications if conditions are met
exports.runETL = async (req, res) => {
  try {
    // Step 1: Fetch CRM Data (Leads, Campaigns, Contacts) from MongoDB
    const leadsData = await crmService.getLeads();
    const campaignsData = await crmService.getCampaigns();
    const contactsData = await crmService.getContacts();

    if (!leadsData || !campaignsData || !contactsData) {
      return res
        .status(404)
        .json({ message: "CRM data not found in the database" });
    }

    // Step 2: Process Leads (ETL)
    const processedLeads = await etlService.processLeads(leadsData);

    // Step 3: Process Campaigns (ETL)
    const processedCampaigns = await etlService.processCampaigns(campaignsData);

    // Store processed data in ETLData model in MongoDB
    await etlService.storeProcessedData("leads", processedLeads);
    await etlService.storeProcessedData("campaigns", processedCampaigns);

    // Step 4: Send Email Notifications if conditions are met
    await etlService.sendLeadConversionNotification(processedLeads);
    await etlService.sendCampaignPerformanceNotification(processedCampaigns);

    // Step 5: Return processed data as response
    res.status(200).json({
      message: "ETL process completed successfully",
      leads: processedLeads,
      campaigns: processedCampaigns,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
