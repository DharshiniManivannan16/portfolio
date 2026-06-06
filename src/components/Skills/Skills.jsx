const Skills = () => {

  const skillCategories = [

    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React JS",
        "Tailwind CSS"
      ]
    },

    {
      title: "Backend & Database",
      skills: [
        "Python",
        "Firebase",
        "MySQL",
        "Flask"
      ]
    },

    {
      title: "AI & Data Analytics",
      skills: [
        "Machine Learning",
        "OpenCV",
        "Data Analytics",
        "Streamlit"
      ]
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code"
      ]
    }

  ]

  return (

    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">

          Skills

        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl"
            >

              <h3 className="text-3xl font-semibold text-blue-400 mb-8">

                {category.title}

              </h3>

              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, idx) => (

                  <span
                    key={idx}
                    className="bg-blue-500/20 text-blue-400 px-5 py-3 rounded-full"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills