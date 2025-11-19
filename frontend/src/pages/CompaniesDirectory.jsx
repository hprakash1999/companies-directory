import { useMemo } from "react";

// Hooks
import { useCompanies } from "../hooks/useCompanies";
import { useDebounce } from "../hooks/useDebounce";
import { useUniqueValues } from "../hooks/useUniqueValues";

// Components
import CompanyCard from "../components/ui/CompanyCard";
import SearchBar from "../components/ui/SearchBar";

// Utils
import { filterCompanies } from "../utils/filterCompanies";

function CompaniesDirectory() {
  const { state, dispatch } = useCompanies();
  const { companies, query } = state;

  // Get unique values
  const locations = useUniqueValues(companies, "location");
  const industries = useUniqueValues(companies, "industry");

  // Debounce query
  const debouncedQuery = useDebounce(query, 500);

  const filteredCompanies = useMemo(
    () => filterCompanies(companies, debouncedQuery),
    [companies, debouncedQuery],
  );

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

      {/* Company Cards */}
      {filteredCompanies.length === 0 ? (
        <p className="text-center text-gray-600">No companies found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company._id} company={company} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompaniesDirectory;
