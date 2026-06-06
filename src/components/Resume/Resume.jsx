const Resume = () => {
  return (

    <section className="py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Resume
        </h2>

        <p className="text-gray-400 text-lg mb-10">

          Download my professional resume to know
          more about my skills, projects, and experience.

        </p>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold shadow-lg"
        >

          Download Resume

        </a>

      </div>

    </section>

  )
}

export default Resume