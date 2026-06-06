const GithubStats = () => {
  return (

    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">

          GitHub Stats

        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GitHub Stats */}

          <img
            src="https://github-readme-stats.vercel.app/api?username=DharshiniManivannan16&show_icons=true&theme=tokyonight"
            alt="github stats"
            className="w-full rounded-3xl"
          />

          {/* Top Languages */}

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=DharshiniManivannan16&layout=compact&theme=tokyonight"
            alt="top languages"
            className="w-full rounded-3xl"
          />

        </div>

      </div>

    </section>

  )
}

export default GithubStats