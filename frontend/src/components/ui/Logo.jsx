import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo({ size = "xl", color = "currentColor" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
  };

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-semibold transition hover:opacity-90 ${sizes[size]}`}
    >
      <FaBuilding className={`text-${color}`} />
      <span className={`text-${color} text-lg font-semibold`}>Directory</span>
    </Link>
  );
}

export default Logo;
