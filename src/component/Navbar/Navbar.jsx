import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import logoAstro from "../../../public/logo/astro.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { title: "Home", path: "/" },
    { title: "ASTRO FEST", path: "/astrofest" },
    { title: "Competition", path: "/competition" },
    { title: "Partner", path: "/partner" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAstro} alt="Astro Logo" className="h-25 w-auto" />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-500"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-900 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 z-50 w-60 rounded-lg bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-2 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
