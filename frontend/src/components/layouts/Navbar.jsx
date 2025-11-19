import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function Navbar() {
  // Navbar data
  const links = [
    { label: "Directory", to: "/" },
    { label: "About", to: "#" },
    { label: "Contact", to: "#" },
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation links */}
          <div className="hidden space-x-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="transition hover:text-gray-200">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call-to-action / buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <button className="text-primary rounded-full bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
              Login
            </button>
            <button className="hover:text-primary rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white">
              Sign Up
            </button>
          </div>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
