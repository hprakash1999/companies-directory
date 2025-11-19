import { FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

// Components
import Button from "./Button";

function CompanyCard({ company }) {
  const { _id, name, logo, industry, location, employees, founded, website } = company;

  return (
    <div className="group hover:border-primary relative cursor-pointer rounded-2xl border border-gray-100 p-0.5 transition-all duration-300 hover:shadow-md">
      <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={name}
            className="h-14 w-14 rounded-xl border border-gray-200 object-cover"
          />
          <div className="flex-1">
            <h2 className="group-hover:text-primary text-lg font-semibold text-gray-900 transition-colors duration-300">
              {name}
            </h2>
            <p className="flex items-center gap-1 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-gray-500" /> {location}
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-block rounded-md bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800">
            {industry}
          </span>
        </div>

        {/* Metadata */}
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
            <FaUsers className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Employees</p>
              <p className="font-semibold text-gray-900">{employees}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Founded</p>
              <p className="font-semibold text-gray-900">{founded}</p>
            </div>
          </div>

          {/* Website */}
          {website && (
            <div className="col-span-2 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2 break-words">
              <FaGlobe className="text-gray-500" />
              <div className="overflow-hidden">
                <p className="text-xs text-gray-500">Website</p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold break-all text-blue-700 hover:underline"
                >
                  {website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* View Details CTA */}
        <div className="mt-6 flex justify-end">
          <Link to={`/${_id}`}>
            <Button size="sm" variant="primary">
              View Details →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
