import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGOURL;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGOURL environment variable inside .env");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true, // Re-enable buffering but ensure we await
      serverSelectionTimeoutMS: 10000,
    };

    console.log("Creating new MongoDB connection pool...");
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB Connected Successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB Connection Error:", e.message);
    throw e;
  }

  return cached.conn;
}
