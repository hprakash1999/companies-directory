// Utils
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

// Repositories
import { companyRepo } from "../repositories/company.repo.js";

// Add companies details
export const addCompaniesDetails = asyncHandler(async (req, res) => {
  const companies = req.body;

  const savedCompanies = await companyRepo.insertMany(companies);

  if (!savedCompanies.length === companies.length) {
    console.warn("Failed to add all companies details.");
  }

  res
    .status(200)
    .json(new ApiResponse(201, savedCompanies, "Added companies details successfully."));
});

// Fetch companies details
export const fetchCompaniesDetails = asyncHandler(async (req, res) => {
  const companies = await companyRepo.findAll();

  if (!companies.length) {
    console.error("No companies details found.");
    throw new ApiError(500, "No companies details found.");
  }

  res.status(200).json(new ApiResponse(200, companies, "Fetched companies details successfully."));
});

// Fetch company details by id
export const fetchCompanyDetailsById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const company = await companyRepo.findById(id);

  if (!company) {
    console.error("No company details found.");
    throw new ApiError(500, "No company details found.");
  }

  res.status(200).json(new ApiResponse(200, company, "Fetched company details successfully."));
});
