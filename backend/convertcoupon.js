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

  // merchant = merchant.trim();
  merchant = merchant.trim().replace(/\s+/g, " "); // Normalize spacing

  // Define custom mappings (add more as needed)
  const customMappings = {
    "ZAFUL_(HONG_KONG)_LIMITED_": "ZAFUL",
    "Vicky_and_Lucas_": "Vicky",
    "https://www.cesdeals.com/": "CESDEALS",
    "7OR9 TECHNOLOGY (HK) LIMITED": "7OR9_TECHNOLOGY",
    "ABBE Glasses Co. Ltd.": "ABBE Glasses",
    "Aiper Official Site": "Aiper",
    "alcheap inc.": "Alcheap",
    "Aosom LLC":"Aosom",
    "Auxbeam Lighting Co., Ltd":"Auxbeam Lighting",
    "Bean Products, Inc.": "Bean Products",
    "Black Bow Jewelry Co.":"Black Bow Jewelry",
    "BM BRIDAL CO.,INC":"BM BRIDAL",
    "Buycoolshirts.com":"Buycoolshirts",
    "Carlinkit Official":"Carlinkit",
    "Carolina Forest Vacuum &amp; Sewing":"Carolina Forest Vacuum & Sewing",
    "CHENGDU OUMEI NETWORK INFORMATION L.T.D":"Kistania",
    "Dogline Inc":"Dogline",
    "EcoGear FX, Inc.":"EcoGear FX",
    "ECOM DEAL INC":"ECOM DEAL",
    "ETECHEASY LIMITED":"ETECHEASY",
    "Fast Technology Limited":"Fast Technology",
    "Figue Acquisition, LLC":"Figue Acquisition",
    "FOX BACKDROP INC":"FOX BACKDROP",
    "Furhaven Pet Products, Inc.":"Furhaven Pet Products",
    "Gaby's Bags, LLC.":"Gaby's Bags",
    "GEEKMAXI.COM":"GEEKMAXI",
    "Glam and Gloria, LLC":"Glam and Gloria",
    "Gpfilter(Glacialpurefilters)":"Gpfilter",
    "Gthic.com":"Gthic",
    "HB Digital Inc (DealFuel)":"HB Digital",
    "HomeGoodsCenter.com":"HomeGoodsCenter",
    "HONG KONG XUMUYANG CO. LIMITED":"Banggood",
    "Humblemaker Coffee Co":"Humblemaker Coffee",
    "InvitationInABottle.com":"InvitationInABottle",
    "IYASSON EC Limited":"IYASSON",
    "joybos.com":"joybos",
    "KATE BACKDROP INC":"KATE BACKDROP",
    "lamtto.com":"lamtto",
    "Lavinia Lingerie Inc.":"Lavinia Lingerie",
    "LONGSTAR (HK) IMP &amp; EXP CO., LIMITED":"WestKiss",
    "Masterofproject.com":"Masterofproject",
    "MetAlert Inc.":"MetAlert",
    "modlily.com":"Modlily",
    "Namecheap Inc":"Namecheap",
    "NEXTMARVEL INC":"NEXTMARVEL",
    "NY Designer Fabrics LLC":"NY Designer Fabrics",
    "onlymaker Fashion Technology Co., Ltd":"OnlyMaker",
    "Packaging Material Direct, Inc":"Packaging Material Direct",
    "popopieshop INC":"PopopieShop",
    "puzzlemaster.ca":"PuzzleMaster",
    "realscience.com":"RealScience",
    "Redstar gb ltd (Stormdesire)":"StormDesire",
    "rotita.com":"Rotita",
    "ROYBI INC":"ROYBI",
    "Sagan Life LLC":"Sagan Life",
    "ScentDecant.com":"ScentDecant",
    "Shanghai Ting Yue Auto Parts Co., Ltd":"alloyworksplus",
    "SilverRushStyle INC.":"SilverRushStyle",
    "SportsIntegrity.Com LLC":"SportsIntegrity",
    "Tenikle, LLC":"Tenikle",
    "The Chess Store, Inc.":"The Chess Store",
    "TOMTOP Technology Co., Ltd":"TOMTOP",
    "uCloudlink America Ltd.":"GlocalMe",
    "UNGEX Pty Ltd":"UNGEX",
    "Universal Herbs Inc":"Universal Herbs",
    "voopeak.com":"VooPeak",
    "www.coofandy.com":"CooFandy",
    "www.corsetdeal.com":"CorsetDeal",
    "www.ekouaer.com":"ekouaer",
    "XTL US INC.":"xTool",
    "Zhengyu Technology":"SilverSal",
    "Zone - Mason Zone":"MasonZone",
  };

  // Apply custom mapping if exists
  merchant = customMappings[merchant] || merchant;

  // Remove invalid characters for filenames
  // return merchant.replace(/[^a-zA-Z0-9\s]/g, " ").trim().replace(/\s+/g, "_");
  return merchant;

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

        // ✅ Remove old JSON files in the output directory before generating new ones
        fs.readdirSync(outputDir).forEach((file) => {
          const filePath = path.join(outputDir, file);
          if (file.endsWith(".json")) {
              fs.unlinkSync(filePath);
          }
      });
      console.log("Old JSON files removed.");

    // Write JSON files for each merchant
    Object.entries(merchants).forEach(([merchant, deals]) => {
      let fileName = merchant.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, " ").trim().replace(/\s+/g, "_");  
      fileName = path.join(outputDir, `${fileName}.json`);
    
      fs.writeFileSync(fileName, JSON.stringify(deals, null, 2), "utf-8");
      console.log(`Created JSON: ${fileName}`);
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
