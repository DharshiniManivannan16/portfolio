import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* Availability Badge */}

        <div className="inline-block bg-green-500/20 text-green-400 px-5 py-2 rounded-full mb-8">
          Available for Internships & Freelance Projects
        </div>

        {/* Intro */}

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-400 text-xl mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold"
        >
          DHARSHINI M
        </motion.h1>

        {/* Typing Animation */}

        <div className="text-3xl md:text-4xl font-semibold mt-8 text-blue-400">

          <TypeAnimation
            sequence={[
              "AI Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Machine Learning Developer",
              1500,
              "Data Analytics Enthusiast",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* Description */}

        <p className="text-gray-400 text-lg leading-8 mt-10 max-w-3xl mx-auto">

          I build intelligent web applications, AI-powered systems,
          and modern digital experiences using React, Python, Firebase,
          Machine Learning, and Data Analytics. Passionate about solving
          real-world problems through technology and innovation.

        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 mt-12 flex-wrap">

          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-slate-600 hover:border-blue-400 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;