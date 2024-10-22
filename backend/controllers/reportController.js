const etlService = require("../services/etlService");
const {
  generatePDFReport,
  generateCSVReport,
} = require("../utils/reportGenerator");

// Generate reports based on processed ETL data
exports.generateReports = async (req, res) => {
  try {
    const { reportType } = req.params; // 'leads' or 'campaigns'

    // Fetch the processed ETL data from the database
    const processedData = await etlService.fetchProcessedData(reportType);
    console.log("Processed Data:", processedData); // Add this line to log the fetched data

    if (!processedData) {
      return res
        .status(404)
        .json({ message: `${reportType} data not found in the ETL database` });
    }

    // Generate CSV or PDF based on user request
    let file;
    if (req.query.format === "csv") {
      file = await generateCSVReport(reportType, processedData);
    } else if (req.query.format === "pdf") {
      file = await generatePDFReport(reportType, processedData);
    } else {
      return res
        .status(400)
        .json({ message: "Please specify a valid report format: csv or pdf" });
    }

    res.download(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
