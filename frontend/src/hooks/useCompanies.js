import { useContext } from "react";
import { CompaniesContext } from "../context/CompaniesContext";

/**
 * @function useCompanies - Hook to access the CompaniesContext and its state.
 *
 * - This hook is used to access the CompaniesContext and its state.
 *
 * - @returns {object} - The CompaniesContext and its state.
 */
export const useCompanies = () => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error("Error in useCompanies hook: Context is not available.");
  }
  return context;
};
