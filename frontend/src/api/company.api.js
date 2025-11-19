import { api } from "./api";

/**
 * @function fetchCompaniesDirectory - Api calls for the companies directory from the backend.
 *
 * INCLUDES:
 * - Fetch all companies directory
 * - Fetch company details by ID
 *
 * @returns {object} - Response data.
 */

// Fetch all companies directory
export const fetchCompaniesDirectory = async () => {
  try {
    const response = await api.get("/companies");
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch companies directory. ERR: ", err?.response?.data || err.message);
    throw err;
  }
};

// Fetch company details
export const fetchCompanyDetailsById = async (id) => {
  try {
    const response = await api.get(`/companies/${id}`);
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch company details. ERR: ", err?.response?.data || err.message);
    throw err;
  }
};
