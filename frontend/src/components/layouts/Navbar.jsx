import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Components
import Logo from "../ui/Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Navigation */}
          <div className="hidden space-x-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="transition hover:text-gray-200">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <button className="text-primary rounded-full bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
              Login
            </button>
            <button className="hover:text-primary rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white">
              Sign Up
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <div
        className={`bg-primary fixed top-0 right-0 z-50 h-full w-64 transform p-6 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile nav links */}
        <ul className="flex flex-col gap-6 text-lg font-medium">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="transition hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="text-primary rounded-full bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
            Login
          </button>
          <button className="hover:text-primary rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-white/20 backdrop-blur-xs transition-opacity duration-500"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
