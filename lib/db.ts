import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cachedDb: Db | null = null;

export async function getCollection() {
  if (cachedDb) {
    return cachedDb.collection("open_source_applications");
  }

  const client = await MongoClient.connect(MONGODB_URI as string);
  const db = client.db();

  cachedDb = db;

  return db.collection("open_source_applications");
}
