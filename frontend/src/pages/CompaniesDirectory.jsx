import { useMemo, useState } from "react";

// Hooks
import { useCompanies } from "../hooks/useCompanies";
import { useDebounce } from "../hooks/useDebounce";
import { usePagination } from "../hooks/usePagination";
import { useUniqueValues } from "../hooks/useUniqueValues";

// Components
import CompanyCard from "../components/ui/CompanyCard";
import Loader from "../components/ui/Loader";
import RecentlyViewed from "../components/ui/RecentlyViewed";
import SearchBar from "../components/ui/SearchBar";

// Utils
import { filterCompanies } from "../utils/filterCompanies";

function CompaniesDirectory() {
  const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]"); // Get recently viewed companies

  const { state, dispatch } = useCompanies();
  const { companies, query } = state;
  const [recentlyViewed, setRecentlyViewed] = useState(stored);

  // Get unique values
  const locations = useUniqueValues(companies, "location");
  const industries = useUniqueValues(companies, "industry");

  // Debounce query
  const debouncedQuery = useDebounce(query, 500);

  // Filter companies
  const filteredCompanies = useMemo(
    () => filterCompanies(companies, debouncedQuery),
    [companies, debouncedQuery],
  );

  // Pagination: Infinite scroll
  const { visibleData: visibleCompanies, loading } = usePagination(filteredCompanies, 20, 20);

  // View details handler
  const handleCompanyView = (company) => {
    const updated = [company, ...recentlyViewed.filter((c) => c._id !== company._id)].slice(0, 10); // keep last 10

    setRecentlyViewed(updated);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated)); // Store in local storage
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          placeholder="Search by name, location, or industry…"
          query={query}
          setQuery={(query) => dispatch({ type: "SET_QUERY", payload: query })}
          locations={locations}
          industries={industries}
        />
      </div>
      <RecentlyViewed companies={recentlyViewed} />

      {/* Company Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCompanies.map((company) => (
          <CompanyCard key={company._id} company={company} onViewDetails={handleCompanyView} />
        ))}
      </div>

      {/* Loader at the bottom */}
      {loading && (
        <div className="mt-6 flex justify-center">
          <Loader size="small" />
        </div>
      )}
    </div>
  );
}

export default CompaniesDirectory;
