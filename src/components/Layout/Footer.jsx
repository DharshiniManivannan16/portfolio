import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-3 select-none no-underline text-slate-800 dark:text-white">
              <img
                src="/logo.png"
                alt="Dharshini M Logo"
                className="w-9 h-9 rounded-xl object-cover shadow-[0_4px_12px_rgba(201,168,76,0.35)]"
              />
              <span className="text-lg font-bold tracking-tight display-font">
                DHARSHINI <span className="text-[var(--gold)] font-medium">M</span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light max-w-[240px] body-font">
              Premium digital solutions and AI systems built for modern web experiences. Designed with precision and engineered to scale.
            </p>
          </div>

          {/* Column 2: Services / Sections */}
          <div>
            <h4 className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 list-none p-0 m-0 text-xs">
              <li>
                <a href="#about" className="text-slate-500 hover:text-[var(--gold)] dark:text-slate-400 dark:hover:text-[var(--gold-light)] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-500 hover:text-[var(--gold)] dark:text-slate-400 dark:hover:text-[var(--gold-light)] transition-colors">
                  Skills Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-500 hover:text-[var(--gold)] dark:text-slate-400 dark:hover:text-[var(--gold-light)] transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-500 hover:text-[var(--gold)] dark:text-slate-400 dark:hover:text-[var(--gold-light)] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-slate-500 hover:text-[var(--gold)] dark:text-slate-400 dark:hover:text-[var(--gold-light)] transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h4 className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-4">
              Contact Detail
            </h4>
            <ul className="space-y-2 list-none p-0 m-0 text-xs text-slate-500 dark:text-slate-400 font-light">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:dharshini.yura@gmail.com" className="hover:text-[var(--gold)] dark:hover:text-[var(--gold-light)] transition-colors">
                  dharshini.yura@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Tirupur, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social accounts */}
          <div>
            <h4 className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-3 text-lg">
              <a
                href="https://github.com/DharshiniManivannan16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-800 flex items-center justify-center hover:bg-[var(--gold)] hover:text-white dark:hover:bg-[var(--gold)] dark:hover:text-white transition-all hover:scale-105 duration-200 select-none text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dharshini-manivannan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-800 flex items-center justify-center hover:bg-[var(--gold)] hover:text-white dark:hover:bg-[var(--gold)] dark:hover:text-white transition-all hover:scale-105 duration-200 select-none text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-20 dark:opacity-30 mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 dark:text-slate-500 font-light select-none">
          <p>© 2026 DHARSHINI M. All rights reserved.</p>
          <p className="flex items-center gap-1.5 uppercase tracking-wider">
            Crafted with precision in Tamil Nadu, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;