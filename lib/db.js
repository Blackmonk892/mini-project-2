import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let isConnect = false;

async function dbConnect() {
  if (isConnect) {
    console.log("Mongodb already connected bruh");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URL);
    isConnect = db.connections[0].readyState === 1;
    console.log("connected to mongodb", db);
  } catch (error) {
    console.error("Failed to connect to mongodb", error);
    throw error;
  }
}

export default dbConnect;
