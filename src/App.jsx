import { useEffect, useRef } from "react";
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
import Experience from "./components/Experience/Experience"

function App() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mouseGlowRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.left = `${mx}px`;
        mouseGlowRef.current.style.top = `${my}px`;
      }
    };

    let animationFrameId;
    const animateRing = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${rx}px`;
        cursorRingRef.current.style.top = `${ry}px`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateRing();

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%, -50%) scale(2.2)";
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorRingRef.current.style.opacity = "0.3";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorRingRef.current.style.opacity = "0.6";
      }
    };

    const attachHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .hover-target");
      targets.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachHoverListeners();

    const domObserver = new MutationObserver(attachHoverListeners);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      domObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    
    setTimeout(() => {
      revealEls.forEach(el => observer.observe(el));
    }, 150);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Custom Cursor elements for desktop */}
      <div id="cursor" ref={cursorRef} className="hidden lg:block"></div>
      <div id="cursor-ring" ref={cursorRingRef} className="hidden lg:block"></div>
      <div id="mouse-glow" ref={mouseGlowRef} className="hidden lg:block"></div>

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

      {/* Experience Section */}
      <section id="experience">
        <Experience />
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