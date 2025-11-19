import axios from "axios";

/**
 * @description API instance for making requests to the backend
 *
 * - This function creates an axios instance with a base URL and a content type header.
 * - It also adds an error interceptor to handle errors from the backend.
 *
 * @returns {object} - Axios instance
 */

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error interceptor
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR: ", err?.response?.data || err.message);
    return Promise.reject(err);
  },
);

export { api };
