import mongoose from "mongoose";

let connection = null;

export async function connectToDatabase() {
    if (connection) {
        return connection;
    }

    try {
        if (!process.env.MONGOURL) {
            throw new Error("MONGOURL is not defined in .env");
        }

        console.log("Connecting to MongoDB...");
        const db = await mongoose.connect(process.env.MONGOURL, {
            serverSelectionTimeoutMS: 10000, // Timeout after 10s instead of 30s
            bufferCommands: false, // Fix "buffering timed out" by failing early if not connected
        });

        connection = db.connection;
        console.log("MongoDb Connected Successfully");
        
        return connection;
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        throw error; // Rethrow so the API route can handle it
    }
}