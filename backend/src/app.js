import cors from "cors";
import express from "express";

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "16kb" }));

// Routes
import companiesRouter from "./routes/company.route.js";

// Routes declarations
app.use("/api/v1/companies", companiesRouter);

export default app;
