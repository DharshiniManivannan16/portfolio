import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Resume",
    "Contact"
  ]

  return (

    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-blue-400">

          DHARSHINI M

        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10">

          {navLinks.map((link, index) => (

            <li key={index}>

              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >

                {link}

              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-6">

          <ul className="flex flex-col gap-6">

            {navLinks.map((link, index) => (

              <li key={index}>

                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition"
                >

                  {link}

                </a>

              </li>

            ))}

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar