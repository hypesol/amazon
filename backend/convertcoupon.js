const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const sqlite3 = require("sqlite3").verbose();


const inputFile = "csv/a-233101.CSV"; // Update this with your actual CSV filename
const outputDir = "../public/data/coupons";
const dbFilePath = "../public/data/coupons.db"; // SQLite database file

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Open SQLite database
const db = new sqlite3.Database(dbFilePath);


// Create table for storing coupons
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS coupons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      merchant TEXT,
      end_date TEXT,
      title TEXT,
      tracking_url TEXT,
      category TEXT,
      description TEXT,
      coupon_code TEXT
    )`
  );
});

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
const masterData = []; // ✅ Collect all data in a single array


fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    let merchant = cleanMerchantName(row["Merchant"]);

    // ✅ Extract only the date (YYYY-MM-DD)
    const endDate = row["End Date"] ? row["End Date"].substring(0, 10) : "";

    // Exclude unwanted fields
    const filteredData = {
      Merchant: merchant,
      "End Date": endDate, // ✅ Store only the date
      Title: row["Title"],
      "Tracking URL": row["Tracking URL"],
      Category: row["Category"],
      Description: row["Description"],
      "Coupon Code": row["Coupon Code"],
    };

    // ✅ Store in master data array
    masterData.push(filteredData);

    // Group data by Merchant
    if (!merchants[merchant]) {
      merchants[merchant] = [];
    }
    merchants[merchant].push(filteredData);

        // ✅ Insert into SQLite database while maintaining order
        db.run(
          `INSERT INTO coupons (merchant, end_date, title, tracking_url, category, description, coupon_code)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            filteredData.Merchant,
            filteredData["End Date"],
            filteredData.Title,
            filteredData["Tracking URL"],
            filteredData.Category,
            filteredData.Description,
            filteredData["Coupon Code"],
          ],
          (err) => {
            if (err) {
              console.error("Error inserting coupon into database:", err);
            }
          }
        );
      })
  .on("end", () => {
    // Write JSON files for each merchant
    Object.entries(merchants).forEach(([merchant, deals]) => {
      const filename = path.join(outputDir, `${merchant}.json`);
      fs.writeFileSync(filename, JSON.stringify(deals, null, 2), "utf-8");
      console.log(`Created JSON: ${filename}`);
    });

    // ✅ Write master JSON file containing all data
    const allDataFile = path.join(outputDir, "all_coupons.json");
    fs.writeFileSync(allDataFile, JSON.stringify(masterData, null, 2), "utf-8");
    console.log(`Created master JSON: ${allDataFile}`);

    console.log("CSV processing complete!");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });
