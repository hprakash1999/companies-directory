import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholder = "Search…", query, setQuery, locations = [] }) {
  const handleSelect = (e) => {
    setQuery(e.target.value); // Fill search input with dropdown selection
  };

  return (
    <div className="focus-within:ring-primary focus-within:ring-opacity-50 relative mx-auto flex w-full max-w-3xl items-center rounded-full bg-white shadow-sm focus-within:ring-2">
      {/* Search icon */}
      <FaSearch className="text-primary absolute top-1/2 left-4 -translate-y-1/2" />

      {/* Input box */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-primary flex-1 rounded-l-full rounded-r-none py-3 pr-4 pl-12 placeholder-gray-400 focus:outline-none"
      />

      {/* Separator */}
      <div className="mx-2 h-6 w-px bg-gray-300"></div>

      {/* Location dropdown */}
      <div className="relative flex items-center">
        <select
          onChange={handleSelect}
          className="cursor-pointer appearance-none rounded-r-full bg-white py-3 pr-8 pl-4 text-sm text-gray-400 focus:outline-none"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <svg
          className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
