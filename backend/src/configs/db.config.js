import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI and database name
    const MONGODB_CONNECTION_URL = `${process.env.MONGODB_URI}`;
    const connection = await mongoose.connect(MONGODB_CONNECTION_URL);

    console.info(`✅ MongoDB connected successfully! Host: ${connection.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB connection failed. ERR: ${err.message}`, {
      stack: err.stack,
    });
    process.exit(1); // Exit with failure code
  }
};
