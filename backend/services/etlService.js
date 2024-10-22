const ETLData = require("../models/ETLData");
const { sendNotificationEmail } = require("./emailService");

// Function to process leads with transformations and ETL rules
exports.processLeads = async (leads) => {
  // Example transformation for leads data
  const totalLeads = leads.length;
  const convertedLeads = leads.filter((lead) => lead.converted).length;
  const conversionRate = (convertedLeads / totalLeads) * 100;

  const processedLeads = {
    totalLeads,
    convertedLeads,
    conversionRate: conversionRate.toFixed(2),
  };

  return processedLeads;
};

// Function to process campaigns with transformations and ETL rules
exports.processCampaigns = async (campaigns) => {
  // Example transformation for campaigns data
  const totalCampaigns = campaigns.length;
  const successfulCampaigns = campaigns.filter(
    (campaign) => campaign.leadsConverted > 0
  ).length;
  const conversionRate = (successfulCampaigns / totalCampaigns) * 100;

  const processedCampaigns = campaigns.map((campaign) => ({
    campaignId: campaign.campaignId,
    name: campaign.name,
    leadsGenerated: campaign.leadsGenerated,
    leadsConverted: campaign.leadsConverted,
    conversionRate: (campaign.leadsConverted / campaign.leadsGenerated) * 100,
  }));

  return processedCampaigns;
};

// Function to store processed data in ETLData model
exports.storeProcessedData = async (type, processedData) => {
  const etlRecord = new ETLData({ type, processedData });
  await etlRecord.save();
};

exports.fetchProcessedData = async (type) => {
  const record = await ETLData.findOne({ type });
  return record ? record.processedData : null;
};
// Function to send notifications for lead conversion
exports.sendLeadConversionNotification = async (processedLeads) => {
  if (processedLeads.conversionRate > 30) {
    console.log("DONE");
    await sendNotificationEmail(
      "tiwari.2022ug1090@iiitranchi.ac.in",
      "Lead Conversion Alert",
      `Lead conversion rate exceeded 30%. Current Rate: ${processedLeads.conversionRate}%`
    );
  }
};

// Function to send notifications for campaign performance
exports.sendCampaignPerformanceNotification = async (processedCampaigns) => {
  const highPerformanceCampaigns = processedCampaigns.filter(
    (campaign) => campaign.conversionRate > 50
  );
  const lowPerformanceCampaigns = processedCampaigns.filter(
    (campaign) => campaign.conversionRate < 20
  );
  if (highPerformanceCampaigns.length > 0) {
    await sendNotificationEmail(
      "tiwari.2022ug1090@iiitranchi.ac.in", //  Temporary Recepient Email
      "Campaign Performance Alert",
      `${highPerformanceCampaigns[0].name} + ${
        highPerformanceCampaigns.length - 1 > 0
          ? highPerformanceCampaigns.length - 1
          : "0"
      } Campaigns   have a conversion rate greater than 50%`
    );
  }
  if (lowPerformanceCampaigns.length > 0) {
    await sendNotificationEmail(
      "tiwari.2022ug1090@iiitranchi.ac.in",
      "Campaign Performance Alert",
      `${lowPerformanceCampaigns[0].name} + ${
        lowPerformanceCampaigns.length - 1 > 0
          ? lowPerformanceCampaigns.length - 1
          : "0"
      } Campaigns   have a conversion rate less than 20%`
    );
  }
};
