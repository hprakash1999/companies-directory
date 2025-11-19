import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

// Footer data
const footerData = {
  quickLinks: [
    { label: "Directory", to: "/" },
    { label: "About", to: "#" },
    { label: "Services", to: "#" },
    { label: "Contact", to: "#" },
  ],

  resources: [
    { label: "FAQ", to: "#" },
    { label: "Blog", to: "#" },
    { label: "Careers", to: "#" },
    { label: "Support", to: "#" },
  ],

  social: [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col items-start gap-3">
            <Logo size="2xl" color="primary" />

            {/* Description */}
            <p className="text-sm text-gray-600">
              <span className="block font-medium text-gray-800">
                Your go-to platform to find and explore companies worldwide.
              </span>
              <span className="mt-1 block text-gray-600">
                Discover, compare, and connect with companies from around the world all in one
                place.
              </span>
            </p>

            {/* Accent Line */}
            <div className="bg-primary mt-2 h-1 w-12 rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerData.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Follow Us</h4>
            <div className="flex items-center gap-3 text-gray-600">
              {footerData.social.map((social, idx) => (
                <a key={idx} href={social.href} className="hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:ring-primary mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-200"></div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Companies Directory. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Terms · Privacy · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
