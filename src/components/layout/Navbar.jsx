import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Package, ChevronDown } from "lucide-react";

const SERVICES_DROPDOWN = [
  { label: "International Express Courier", path: "/services/courier" },
  { label: "Air Freight Solutions", path: "/services/air-freight" },
  { label: "Sea Freight Solutions", path: "/services/sea-freight" },
  { label: "NGO & Humanitarian Logistics", path: "/services/ngo" },
];

const NAV_LINKS = [
  { label: "Industries", path: "/industries" },
  { label: "Coverage", path: "/coverage" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Package className="text-orange-500" size={28} />
            <span className="text-xl font-bold text-white">
              Meibex <span className="text-orange-500">Express</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  location.pathname.startsWith("/services")
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                  <div className="bg-gray-900 border border-white/10 rounded-xl p-2 shadow-xl shadow-black/40">
                    {SERVICES_DROPDOWN.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                          isActive(item.path)
                            ? "bg-orange-500/10 text-orange-400"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          <p className="text-gray-500 text-xs uppercase tracking-widest px-3 py-1">
            Services
          </p>
          {SERVICES_DROPDOWN.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-2" />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-2" />
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
