import mongoose from "mongoose";
import "@/models"; // <── ensure models register before any DB operations

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  await mongoose.connect(uri, {
    dbName: "property_bazar",
    bufferCommands: false,
  });

  console.log("✅ MongoDB connected");
}
