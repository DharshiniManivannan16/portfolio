import Navbar from "./components/Layout/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Certifications from "./components/Certifications/Certifications"
import Resume from "./components/Resume/Resume"
import GithubStats from "./components/Github/GithubStats"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Layout/Footer"

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden pt-24">
      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <section id="about">
        <About />
      </section>

      {/* Skills Section */}

      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}

      <section id="projects">
        <Projects />
      </section>

      {/* Certifications Section */}

      <section id="certifications">
        <Certifications />
      </section>

      {/* Resume Section */}

      <section id="resume">
        <Resume />
      </section>

      {/* Github Stats Section */}

      <section id="github">
        <GithubStats />
      </section>

      {/* Contact Section */}

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}

      <Footer />

    </div>
  )
}

export default App