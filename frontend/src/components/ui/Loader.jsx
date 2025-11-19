import { FaBuilding } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex animate-pulse flex-col items-center space-y-2 text-gray-400">
        <FaBuilding className="text-4xl" />
        <span className="text-sm">Loading companies...</span>
      </div>
    </div>
  );
}

export default Loader;
