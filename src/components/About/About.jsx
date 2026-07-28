import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN: Visuals Overlapping Cards */}
          <div className="relative h-[480px] hidden lg:block select-none">
            {/* Main Profile Image Card */}
            <div className="absolute w-[320px] h-[380px] top-0 left-0 rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-deep)] bg-gradient-to-br from-[var(--cream)] to-[#ebd9b2] border border-[var(--glass-border)] transition-transform hover:scale-[1.02] duration-300">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/Resume Photo.jpeg"
                onError={(e) => {
                  // Fallback if Resume Photo.jpeg is missing or corrupted
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = "<div class='w-full h-full flex items-center justify-center text-7xl font-bold text-[var(--gold)] display-font'>DM</div>";
                }}
                alt="Dharshini M"
              />
            </div>

            {/* Secondary Accent Card */}
            <div className="absolute w-[200px] h-[220px] bottom-0 right-[40px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-deep)] bg-gradient-to-tr from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-white border border-[var(--glass-border)] hover:rotate-2 hover:scale-[1.03] transition-all duration-300">
              <div className="text-center p-6">
                <i className="fa-solid fa-code text-4xl mb-4 text-[var(--gold-pale)]"></i>
                <div className="ui-font text-[10px] uppercase tracking-wider text-[var(--gold-pale)]">
                  Code Crafted
                </div>
                <div className="display-font text-2xl font-bold mt-1 text-white">
                  With Pride
                </div>
              </div>
            </div>

            {/* Floating Info Badge */}
            <div className="absolute top-[40px] right-0 bg-white dark:bg-slate-800 border border-[var(--glass-border)] rounded-[var(--radius)] p-4 shadow-[var(--shadow-gold)] animate-[float_4s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="display-font text-2xl font-bold text-[var(--gold)]">
                  5+
                </div>
                <div className="ui-font text-[8px] tracking-wider text-slate-400 dark:text-slate-400 uppercase font-bold">
                  Major Projects
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="reveal">
            <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
              Weaving Intelligence,<br />One Line at a Time
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6 body-font">
              I am a dedicated Artificial Intelligence and Full Stack Developer focused on building
              premium web applications and custom machine learning pipelines. Combining analytical
              precision with structural aesthetics, I turn ideas into scaleable, responsive software.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8 body-font">
              Always searching for efficient solutions, I build experiences that bridge the gap between
              complex backends (Python, Firebase) and fluid frontends (React, Tailwind CSS).
            </p>

            {/* Mission / Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-800/40 rounded-[var(--radius)] hover:border-[var(--gold)] dark:hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] hover:translate-y-[-2px] transition-all duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="ui-font text-xs font-bold text-[var(--gold-dark)] dark:text-[var(--gold-light)] uppercase tracking-wider mb-2">
                  My Mission
                </h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  To democratize intelligence by building codebases that are fast, intuitive, and designed for scalability.
                </p>
              </div>

              <div className="p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-800/40 rounded-[var(--radius)] hover:border-[var(--gold)] dark:hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] hover:translate-y-[-2px] transition-all duration-300">
                <div className="text-2xl mb-2">🔭</div>
                <h4 className="ui-font text-xs font-bold text-[var(--gold-dark)] dark:text-[var(--gold-light)] uppercase tracking-wider mb-2">
                  My Focus
                </h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  To blend structural engineering with AI vectors to address real-world business challenges.
                </p>
              </div>
            </div>

            {/* Signature name */}
            <div className="text-right mt-8 ui-font text-slate-800 dark:text-slate-200 font-semibold text-sm">
              — Dharshini M <br />
              <span className="text-[var(--gold)] font-medium text-xs">Data Analyst & Full Stack Developer</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;