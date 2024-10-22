const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Function to generate PDF report based on processed ETL data
exports.generatePDFReport = async (reportType, data) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(
      __dirname,
      `../reports/${reportType}-report.pdf`
    );
    const doc = new PDFDocument();

    // Pipe the PDF into a writable stream
    doc.pipe(fs.createWriteStream(filePath));

    // Add some headers to the PDF
    doc
      .fontSize(18)
      .text(`${reportType.toUpperCase()} Report`, { align: "center" });
    doc.moveDown();

    // Add data content to the PDF
    if (reportType === "leads") {
      doc.fontSize(12).text(`Total Leads: ${data.totalLeads}`);
      doc.fontSize(12).text(`Converted Leads: ${data.convertedLeads}`);
      doc.fontSize(12).text(`Conversion Rate: ${data.conversionRate}%`);
    } else if (reportType === "campaigns") {
      data.forEach((campaign) => {
        doc.fontSize(12).text(`Campaign: ${campaign.name}`);
        doc.fontSize(12).text(`Leads Generated: ${campaign.leadsGenerated}`);
        doc.fontSize(12).text(`Leads Converted: ${campaign.leadsConverted}`);
        doc
          .fontSize(12)
          .text(`Conversion Rate: ${campaign.conversionRate.toFixed(2)}%`);
        doc.moveDown();
      });
    }

    // Finalize the PDF file
    doc.end();

    // Resolve with the file path once the PDF has been written
    doc.on("finish", () => {
      resolve(filePath);
    });

    doc.on("error", (err) => {
      reject(err);
    });
  });
};

// Function to generate CSV report based on processed ETL data
exports.generateCSVReport = async (reportType, data) => {
  return new Promise(async (resolve, reject) => {
    const filePath = path.join(
      __dirname,
      `../reports/${reportType}-report.csv`
    );

    let records;
    let headers;

    // Define the headers and data for CSV based on report type
    if (reportType === "leads") {
      headers = [
        { id: "totalLeads", title: "Total Leads" },
        { id: "convertedLeads", title: "Converted Leads" },
        { id: "conversionRate", title: "Conversion Rate (%)" },
      ];
      records = [data]; // Leads data is already summarized
    } else if (reportType === "campaigns") {
      headers = [
        { id: "campaignId", title: "Campaign ID" },
        { id: "name", title: "Campaign Name" },
        { id: "leadsGenerated", title: "Leads Generated" },
        { id: "leadsConverted", title: "Leads Converted" },
        { id: "conversionRate", title: "Conversion Rate (%)" },
      ];
      records = data; // Campaigns data is an array
    }

    // Create the CSV writer instance with file path and headers
    const csvWriterInstance = createCsvWriter({
      path: filePath,
      header: headers,
    });

    try {
      // Write records to CSV file
      await csvWriterInstance.writeRecords(records);
      resolve(filePath);
    } catch (err) {
      reject(err); // Catch any errors during CSV writing
    }
  });
};
