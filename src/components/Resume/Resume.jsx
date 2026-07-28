const Resume = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center reveal">
        <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
          Qualifications
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
          My Resume
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Download my professional curriculum vitae to review my academic history, internship experience, and structural capabilities.
        </p>
        <a
          href="/Dharshini_M_resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] text-white font-semibold ui-font text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_4px_15px_rgba(201,168,76,0.25)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.45)] hover:translate-y-[-2px] transition-all duration-300 select-none cursor-none"
        >
          Download CV / Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;