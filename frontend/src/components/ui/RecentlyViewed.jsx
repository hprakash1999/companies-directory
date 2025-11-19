import { Link } from "react-router-dom";

function RecentlyViewed({ companies }) {
  if (!companies) companies = [];

  const totalSlots = 10; // Total number of slots
  const placeholders = totalSlots - companies.length;

  return (
    <div className="my-6">
      <h3 className="mb-3 text-sm font-semibold text-gray-600 uppercase">Recently Viewed</h3>

      <div className="relative rounded-2xl border border-gray-300 p-4">
        <div
          className="flex gap-16 overflow-x-auto"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Hide scrollbar */}
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <div className="hide-scrollbar flex gap-16">
            {/* Render companies */}
            {companies.map((company) => (
              <Link
                key={company._id}
                to={`/companies/${company._id}`}
                className="h-14 w-14 shrink-0"
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-200 shadow-md transition-transform duration-200 hover:scale-105">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>
            ))}

            {/* Render placeholders to keep space constant */}
            {Array.from({ length: Math.max(placeholders, 0) }).map((_, idx) => (
              <div
                key={idx}
                className="h-16 w-16 shrink-0 rounded-full border border-gray-200 bg-gray-100"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewed;
