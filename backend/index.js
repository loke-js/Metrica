// index.js
const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const crmRoutes = require("./routes/crmRoutes.js");
const etlRoutes = require("./routes/etlRoutes.js");
const reportRoutes = require("./routes/reportRoutes.js");
const connectDB = require("./db/connect.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();
app.use("/api/crm", crmRoutes);
app.use("/api/etl", etlRoutes);
app.use("/api/report", reportRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
