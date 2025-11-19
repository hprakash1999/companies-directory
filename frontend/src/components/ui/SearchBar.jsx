import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholder = "Search…", query, setQuery, locations = [] }) {
  const handleSelect = (e) => {
    setQuery(e.target.value); // Fill search input with dropdown selection
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Mobile version */}
      <div className="flex flex-col gap-2 sm:hidden">
        <div className="relative w-full">
          <FaSearch className="text-primary absolute top-1/2 left-4 -translate-y-1/2" />

          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-primary focus:border-primary focus:ring-primary w-full rounded-full border border-gray-300 py-3 pr-4 pl-10 placeholder-gray-400 transition focus:ring-1 focus:outline-none"
          />
        </div>

        <div className="relative w-full">
          <select
            onChange={handleSelect}
            className="focus:border-primary focus:ring-primary w-full cursor-pointer appearance-none rounded-full border border-gray-300 bg-white py-3 pr-8 pl-4 text-sm text-gray-400 transition focus:ring-1 focus:outline-none"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

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

      {/* Desktop & Tablet */}
      <div className="focus-within:ring-primary focus-within:ring-opacity-50 hidden items-center rounded-full bg-white shadow-sm focus-within:ring-2 sm:flex">
        {/* Search input wrapper */}
        <div className="relative min-w-0 flex-1">
          <FaSearch className="text-primary absolute top-1/2 left-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-primary w-full min-w-0 rounded-l-full rounded-r-none py-3 pr-4 pl-12 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Separator */}
        <div className="mx-3 h-6 w-px bg-gray-300" />

        {/* Dropdown wrapper */}
        <div className="relative w-auto shrink-0">
          <select
            onChange={handleSelect}
            className="cursor-pointer appearance-none rounded-l-none rounded-r-full bg-white py-3 pr-8 pl-4 text-sm text-gray-400 focus:outline-none"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
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
    </div>
  );
}

export default SearchBar;
