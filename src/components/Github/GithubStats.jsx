const GithubStats = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
            GitHub Metrics & Activity
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed">
            Real-time developer metrics pulling repository contributions and language distribution directly from my GitHub profile.
          </p>
        </div>

        {/* Stats Images */}
        <div className="grid md:grid-cols-2 gap-10 reveal">
          {/* GitHub Stats Card */}
          <div className="rounded-[var(--radius-lg)] border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0b0f19] p-4 shadow-[var(--shadow-deep)] hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=DharshiniManivannan16&show_icons=true&title_color=C9A84C&icon_color=C9A84C&text_color=94a3b8&bg_color=0b0f19&hide_border=true"
              alt="GitHub Stats"
              className="w-full h-auto select-none"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Top Languages Card */}
          <div className="rounded-[var(--radius-lg)] border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0b0f19] p-4 shadow-[var(--shadow-deep)] hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=DharshiniManivannan16&layout=compact&title_color=C9A84C&icon_color=C9A84C&text_color=94a3b8&bg_color=0b0f19&hide_border=true"
              alt="Top Languages"
              className="w-full h-auto select-none"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;