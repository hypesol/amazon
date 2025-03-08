const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

// Path to the directory containing CSV files
const csvDirectory = "./csv/products";

// Path to the SQLite database file
const dbFilePath = "./db/mydbsel.db";

// ✅ Fields to keep in the database
const selectedFields = [
    "merchant_id",
    "merchant_name",
    "tracking_url",
    "image_url",
    "thumbnail_url",
    "price",
    "product_category",
    "product_subcategory",
    "product_description",
  ];
  
  // ✅ Original headers in the CSV
  const headers = [
    "product_id",
    "product_name",
    "merchant_id",
    "merchant_name",
    "tracking_url",
    "image_url",
    "thumbnail_url",
    "price",
    "retail_price",
    "primary_category",
    "sub_category",
    "search_terms",
    "custom_field_1",
    "custom_field_2",
    "custom_field_3",
    "custom_field_4",
    "custom_field_5",
    "last_updated",
    "stock_status",
    "merchant_name_again",
    "unknown_1",
    "product_category",
    "product_subcategory",
    "product_description",
    "condition",
    "upc",
    "sku",
    "unknown_2",
    "extra_field_1",
    "extra_field_2",
    "extra_field_3",
    "extra_field_4",
    "extra_field_5",
    "commission",
    "add_to_cart_url",
    "slug",
    "unknown_3",
    "unknown_4",
    "unknown_5",
    "unknown_6",
    "unknown_7",
    "mobile_tracking_url",
    "mobile_slug",
    "alternate_slug",
    "unknown_8",
    "unknown_9",
    "unknown_10",
    "unknown_11",
    "unknown_12",
  ];
  
  // Open SQLite database
  const db = new sqlite3.Database(dbFilePath);
  
  // ✅ Create table with only selected fields
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS mytable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ${selectedFields.map((h) => `${h} TEXT`).join(", ")}
      )`
    );
  
    // Read all CSV files in the directory
    fs.readdir(csvDirectory, (err, files) => {
      if (err) {
        console.error("Error reading directory:", err);
        return;
      }
  
      // Process only CSV files
      const csvFiles = files.filter((file) => path.extname(file).toLowerCase() === ".csv");
  
      csvFiles.forEach((file) => {
        const filePath = path.join(csvDirectory, file);
  
        fs.createReadStream(filePath)
          .pipe(csv({ separator: "|", headers: headers }))
          .on("data", (row) => {
            // ✅ Filter row to keep only selected fields
            const filteredRow = selectedFields.reduce((obj, key) => {
              obj[key] = row[key] || ""; // Ensure no undefined values
              return obj;
            }, {});
  
            // Insert filtered data into the database
            const values = selectedFields.map((h) => filteredRow[h]);
            db.run(
              `INSERT INTO mytable (${selectedFields.join(", ")}) VALUES (${selectedFields.map(() => "?").join(", ")})`,
              values,
              (err) => {
                if (err) {
                  console.error(`Error inserting row from ${file}:`, err);
                }
              }
            );
          })
          .on("end", () => {
            console.log(`CSV file ${file} successfully processed`);
          });
      });
    });
  });