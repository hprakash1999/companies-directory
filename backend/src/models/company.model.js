import mongoose from "mongoose";

// Schema definition
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    industry: {
      type: String,
      required: true,
      trim: true,
    },

    employees: {
      type: Number,
      required: true,
      default: 0,
    },

    founded: {
      type: Number,
      required: true,
    },

    website: {
      type: String,
      trim: true,
    },

    logo: {
      type: String, // URL
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Company = mongoose.model("Company", companySchema);
