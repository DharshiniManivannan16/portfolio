import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h3 className="text-4xl font-bold text-blue-400 mb-8">
            AI & Full Stack Developer
          </h3>

          <p className="text-gray-400 text-lg leading-8">
            I am a passionate developer focused on building intelligent
            and scalable web applications using modern technologies
            like React, Python, Firebase, Machine Learning,
            and Data Analytics.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            My interests include Artificial Intelligence,
            Full Stack Development, Data Analytics,
            and creating innovative solutions that solve
            real-world challenges.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            I continuously improve my technical skills by
            working on practical projects, exploring new
            technologies, and building professional-grade applications.
          </p>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
              <h4 className="text-4xl font-bold text-blue-400">5+</h4>
              <p className="text-gray-400 mt-3">Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
              <h4 className="text-4xl font-bold text-blue-400">AI</h4>
              <p className="text-gray-400 mt-3">Focused Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
              <h4 className="text-4xl font-bold text-blue-400">ML</h4>
              <p className="text-gray-400 mt-3">Machine Learning</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
              <h4 className="text-4xl font-bold text-blue-400">Web</h4>
              <p className="text-gray-400 mt-3">Full Stack Development</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;