const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

// Path to the directory containing CSV files
const csvDirectory = "./csv/products";

// Path to the SQLite database file
const dbFilePath = "./mydball.db";

// Manually define column headers (since CSV has no headers)
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

// Create a new SQLite database
const db = new sqlite3.Database(dbFilePath);

// Create a table dynamically
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS mytable (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ${headers.map((h) => `${h} TEXT`).join(", ")}
    )`
  );

  // Read all CSV files in the directory
  fs.readdir(csvDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Filter only CSV files
    const csvFiles = files.filter((file) => path.extname(file).toLowerCase() === ".csv");

    // Process each CSV file
    csvFiles.forEach((file) => {
      const filePath = path.join(csvDirectory, file);

      fs.createReadStream(filePath)
        .pipe(csv({ separator: "|", headers: headers }))
        .on("data", (row) => {
          // Insert each row into the SQLite database
          const values = headers.map((h) => row[h] || ""); // Ensure no undefined values

          db.run(
            `INSERT INTO mytable (${headers.join(", ")}) VALUES (${headers.map(() => "?").join(", ")})`,
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
