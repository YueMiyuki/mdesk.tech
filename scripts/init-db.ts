import { getCollection, cleanup } from "../lib/db";

async function initializeDatabase() {
  try {
    console.log("Initializing MongoDB database...");

    // Get the collection (this will create it if it doesn't exist)
    const collection = await getCollection();

    // Create TTL index if it doesn't exist
    await collection.createIndex(
      { timestamp: 1 },
      { expireAfterSeconds: 3600, background: true },
    );

    // Run initial cleanup
    await cleanup();

    console.log("MongoDB database initialized successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error initializing MongoDB database:", error);
    process.exit(1);
  }
}

initializeDatabase();
