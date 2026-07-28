import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Resume",
    "Contact"
  ];

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/75 dark:bg-slate-950/75 backdrop-blur-xl border-b border-[var(--glass-border)] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 select-none text-slate-800 dark:text-white no-underline">
          <img
            src="/logo.png"
            alt="Dharshini M Logo"
            className="w-10 h-10 rounded-xl object-cover shadow-[0_4px_12px_rgba(201,168,76,0.35)]"
          />
          <span className="text-xl font-bold tracking-tight display-font">
            DHARSHINI <span className="text-[var(--gold)] font-medium">M</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link === "Contact" ? (
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-white font-semibold ui-font text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(201,168,76,0.45)] transition-all duration-300 select-none text-center block"
                >
                  Contact Me
                </a>
              ) : (
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-[var(--gold)] dark:hover:text-[var(--gold-light)] font-medium ui-font text-xs uppercase tracking-wider relative group transition-colors duration-200"
                >
                  {link}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Action Controls (Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-slate-800 dark:text-white p-1 hover:text-[var(--gold)] transition-colors select-none"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[73px] left-0 right-0 bg-white/95 dark:bg-slate-950/95 border-b border-[var(--glass-border)] py-6 px-8 flex flex-col gap-5 shadow-lg backdrop-blur-xl animate-fadeUp">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-[var(--gold)] font-semibold ui-font text-sm uppercase tracking-wider py-2 border-b border-slate-100 dark:border-slate-800/50 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;