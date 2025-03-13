import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function GET(req:any) {
  try {
    // Extract query parameters manually
    const url = new URL(req.url, "http://localhost"); // Base URL required for parsing
    const dbType = url.searchParams.get("dbType"); // "coupons" or "products"
    const queryType = url.searchParams.get("type"); // e.g., "all", "random"

    // Select the correct database file
    let dbFile;
    if (dbType === "coupons") {
      dbFile = "public/data/coupons.db";
    } else if (dbType === "products") {
      dbFile = "public/data/products.db";
    } else {
      return new Response(JSON.stringify({ success: false, error: "Invalid database type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Open the selected SQLite database
    const db = await open({
      filename: path.join(process.cwd(), dbFile),
      driver: sqlite3.Database,
    });

    // Define queries based on `queryType`
    let query = "";
    if (queryType === "all") {
      query = "SELECT * FROM mytable"; // Adjust table name as needed
    } else if (queryType === "random") {
      query = "SELECT * FROM mytable ORDER BY RANDOM() LIMIT 12"; // Fetch 12 random records
    } else {
      return new Response(JSON.stringify({ success: false, error: "Invalid query type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Execute the selected query
    const data = await db.all(query);

    // Close the database connection
    await db.close();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error:any) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
