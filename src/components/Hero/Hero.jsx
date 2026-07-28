import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 2.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.alpha = Math.random() * 0.6 + 0.1;
        this.gold = Math.random() > 0.65;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.gold
          ? `rgba(201, 168, 76, ${this.alpha})`
          : `rgba(180, 160, 100, ${this.alpha * 0.5})`;
        ctx.fill();
      }
    }

    const particles = [];
    const maxParticles = Math.min(120, Math.floor((W * H) / 9000));
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12 select-none bg-gradient-to-b from-[#ffffff] via-[#faf7f0] to-[#f5edd8] dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0f0d08]"
    >
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40"
      />

      {/* Floating SVGs */}
      <svg
        className="absolute top-[15%] left-[10%] w-16 h-16 opacity-20 animate-[float_6s_ease-in-out_infinite] pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 95,74 5,74"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="rgba(201,168,76,0.03)"
        />
      </svg>
      <svg
        className="absolute top-[20%] right-[12%] w-12 h-12 opacity-20 animate-[float_8s_ease-in-out_infinite_reverse] pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="rgba(201,168,76,0.03)"
          transform="rotate(20 50 50)"
        />
      </svg>
      <svg
        className="absolute bottom-[22%] left-[8%] w-14 h-14 opacity-20 animate-[float_7s_ease-in-out_infinite_1s] pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="rgba(201,168,76,0.03)"
        />
        <circle cx="50" cy="50" r="20" stroke="#C9A84C" strokeWidth="1" fill="none" />
      </svg>
      <svg
        className="absolute bottom-[26%] right-[10%] w-12 h-12 opacity-20 animate-[float_5s_ease-in-out_infinite_2s] pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 97,35 80,91 20,91 3,35"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="rgba(201,168,76,0.04)"
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] px-5 py-2.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] ui-font shadow-[0_4px_12px_rgba(201,168,76,0.05)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-ping"></span>
          Available for Internships & Projects
        </motion.div>

        {/* Intro Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[40px] md:text-[68px] font-bold leading-[1.1] mb-6 text-slate-800 dark:text-slate-100 display-font tracking-tight"
        >
          Transforming Data & Code Into <br />
          <em className="text-[var(--gold)] font-medium not-italic">Intelligent Digital</em> Solutions
        </motion.h1>

        {/* Typing Role Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base md:text-xl font-medium tracking-wide text-slate-600 dark:text-slate-300 ui-font min-h-[36px]"
        >
          <TypeAnimation
            sequence={[
              "I build intelligent web applications.",
              1800,
              "I train custom Machine Learning models.",
              1800,
              "I build full stack cloud applications.",
              1800,
              "I translate complex datasets into insights.",
              1800,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </motion.div>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400 mt-8 max-w-2xl mx-auto body-font font-light"
        >
          Hello, I'm Dharshini M. I build high-performance systems and user interfaces using React,
          Python, Firebase, Machine Learning, and Data Analytics, turning complex technical challenges
          into smooth, elegant products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex justify-center gap-4 mt-10 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] text-white font-semibold ui-font text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_6px_25px_rgba(201,168,76,0.35)] hover:translate-y-[-3px] hover:shadow-[0_12px_30px_rgba(201,168,76,0.5)] transition-all duration-300 select-none"
          >
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border-2 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--gold)] dark:hover:border-[var(--gold)] hover:text-[var(--gold)] dark:hover:text-[var(--gold)] font-semibold ui-font text-xs uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-[rgba(201,168,76,0.04)] hover:translate-y-[-3px] transition-all duration-300 select-none"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-6 left-50% transform -translate-x-[50%] flex flex-col items-center gap-2">
        <span className="ui-font text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Scroll
        </span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-[var(--gold)] to-transparent animate-[scrollPulse_2s_infinite]"></div>
      </div> */}
    </section>
  );
};

export default Hero;