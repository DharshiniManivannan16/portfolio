const Certifications = () => {
  const certificationsData = [
    {
      title: "Oracle Cloud Infrastructure 2025",
      subtitle: "AI Foundation Associate Certification",
      desc: "Validation of fundamental concepts in Artificial Intelligence, including machine learning models, neural networks, deep learning, and generative AI services deployed within the Oracle Cloud infrastructure.",
      year: "2025",
    },
    {
      title: "MongoDB AI & Vector Search",
      subtitle: "Introduction to AI and Vector Search",
      desc: "Specialized training focusing on vector databases, semantic searches, embeddings generation, and building AI applications with RAG architectures.",
      year: "2025",
    },
    {
      title: "EBPL Internship on GEN AI",
      subtitle: "Generative AI Internship Program",
      desc: "Practical hands-on internship concentrating on Large Language Models, prompt crafting strategies, model API integration, and agentic workflows.",
      year: "2024",
    },
    {
      title: "Data Analytics with Python Certificate (FCC)",
      subtitle: "Data Analytics with Python Certificate",
      desc: "Professional certification for data analytics using Python, including data manipulation, statistical analysis, and data visualization using libraries such as Pandas, NumPy, Matplotlib, and Seaborn.",
      year: "2025",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
            Certifications & Training
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed">
            A chronological timeline of my professional accomplishments, academic credentials, and specialized technical certifications.
          </p>
        </div>

        {/* Timeline Wrap */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Central Line (Visible on md and up) */}
          <div className="absolute left-[14px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {certificationsData.map((cert, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row relative items-start ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[14px] md:left-1/2 top-8 w-3.5 h-3.5 rounded-full bg-[var(--gold)] border-2 border-white dark:border-slate-950 shadow-[0_0_0_3px_var(--gold)] -translate-x-1/2 z-10"></div>

                  {/* Left Column Spacer (Forces alternate sides on desktop) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card Content Column */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8 reveal">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[var(--radius)] p-6 shadow-[var(--shadow-deep)] hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] hover:translate-y-[-2px] transition-all duration-300">
                      {/* Year badge */}
                      <span className="display-font text-xl font-bold text-[var(--gold)] tracking-wide block mb-1">
                        {cert.year}
                      </span>

                      {/* Title */}
                      <h3 className="ui-font text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide mb-1">
                        {cert.title}
                      </h3>

                      {/* Subtitle */}
                      <h4 className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3">
                        {cert.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-light body-font">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;