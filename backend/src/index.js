import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // Load env variables

import app from "./app.js";
import { connectDB } from "./configs/db.config.js";

const PORT = process.env.PORT || 5000;

// Connect DB with server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Server failed to start due to database connection issue. ERR: ", {
      stack: err.stack,
    });
  });
