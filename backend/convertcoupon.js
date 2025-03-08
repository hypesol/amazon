const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFile = "csv/a-233101.CSV"; // Update this with your actual CSV filename
const outputDir = "output_json";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to clean and normalize merchant names for filenames
const cleanMerchantName = (merchant) => {
  if (!merchant) return "Unknown";

  // Define custom mappings (add more as needed)
  const customMappings = {
    "ZAFUL_(HONG_KONG)_LIMITED_": "ZAFUL",
    "Vicky_and_Lucas_": "Vicky",
    "https:/www.cesdeals.com": "CESDEALS",
  };

  // Apply custom mapping if exists
  merchant = customMappings[merchant] || merchant;

  // Remove invalid characters for filenames
  return merchant.replace(/[^a-zA-Z0-9\s]/g, " ").trim().replace(/\s+/g, "_");
};

const merchants = {};

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    let merchant = cleanMerchantName(row["Merchant"]);

    // Exclude unwanted fields
    const filteredData = {
      Merchant: merchant,
      "End Date": row["End Date"],
      Title: row["Title"],
      "Tracking URL": row["Tracking URL"],
      Category: row["Category"],
      Description: row["Description"],
      "Coupon Code": row["Coupon Code"],
    };

    // Group data by Merchant
    if (!merchants[merchant]) {
      merchants[merchant] = [];
    }
    merchants[merchant].push(filteredData);
  })
  .on("end", () => {
    // Write JSON files for each merchant
    Object.entries(merchants).forEach(([merchant, deals]) => {
      const filename = path.join(outputDir, `${merchant}.json`);
      fs.writeFileSync(filename, JSON.stringify(deals, null, 2), "utf-8");
      console.log(`Created JSON: ${filename}`);
    });

    console.log("CSV processing complete!");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });
