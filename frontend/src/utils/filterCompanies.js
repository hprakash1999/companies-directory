/**
 * @function filterCompanies - Filters an array of companies based on a search query.
 * @param {array} companies - The array of companies to filter.
 * @param {string} query - The search query to filter the companies by.
 *
 * @returns {array} - The filtered array of companies.
 */

export const filterCompanies = (companies, query) => {
  if (!query) return companies;

  const q = query.toLowerCase();

  return companies.filter(
    (company) =>
      company.name.toLowerCase().includes(q) ||
      company.location.toLowerCase().includes(q) ||
      company.industry.toLowerCase().includes(q),
  );
};
