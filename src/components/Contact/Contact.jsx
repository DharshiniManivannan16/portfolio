import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dhayadharsu", // SERVICE ID
        "template_954eemo", // TEMPLATE ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "JrbZuzCwaCvp4Bacp" // PUBLIC KEY
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        alert("Message sent successfully 🚀");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("FAILED:", error);
        alert("Failed to send message ❌ Check EmailJS setup");
        setLoading(false);
      });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="reveal-left">
            <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
              Let's Build Something<br />Remarkable
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed mb-10">
              Whether you have a specific internship opportunity, a freelance project, or simply want to say hello — feel free to drop a message.
            </p>

            <div className="space-y-6">
              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--cream)] to-[var(--gold-pale)] dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[var(--gold-dark)] dark:text-[var(--gold-light)] text-base shadow-sm">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:dharshini.yura@gmail.com"
                    className="text-slate-700 dark:text-slate-200 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    dharshini.yura@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--cream)] to-[var(--gold-pale)] dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[var(--gold-dark)] dark:text-[var(--gold-light)] text-base shadow-sm">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-1">
                    Location
                  </div>
                  <div className="text-slate-700 dark:text-slate-200 text-sm">
                    Tirupur, Tamil Nadu, India
                  </div>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--cream)] to-[var(--gold-pale)] dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[var(--gold-dark)] dark:text-[var(--gold-light)] text-base shadow-sm">
                  <i className="fa-brands fa-github text-lg"></i>
                </div>
                <div>
                  <div className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-1">
                    GitHub Profile
                  </div>
                  <a
                    href="https://github.com/DharshiniManivannan16"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 dark:text-slate-200 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    github.com/DharshiniManivannan16
                  </a>
                </div>
              </div>

              {/* LinkedIn Item */}
<div className="flex items-start gap-4">
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--cream)] to-[var(--gold-pale)] dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[var(--gold-dark)] dark:text-[var(--gold-light)] text-base shadow-sm">
    <i className="fa-brands fa-linkedin-in text-lg"></i>
  </div>
  <div>
    <div className="ui-font text-[10px] font-bold uppercase tracking-wider text-[var(--gold-dark)] dark:text-[var(--gold-light)] mb-1">
      LinkedIn Profile
    </div>
    <a
      href="https://www.linkedin.com/in/dharshini-manivannan"
      target="_blank"
      rel="noreferrer"
      className="text-slate-700 dark:text-slate-200 hover:text-[var(--gold)] transition-colors text-sm"
    >
      linkedin.com/in/dharshini-manivannan
    </a>
  </div>
</div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="reveal-right">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-deep)] transition-colors">
              <div className="display-font text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Start a Conversation
              </div>
              <form onSubmit={sendEmail} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="ui-font text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 outline-none focus:border-[var(--gold)] focus:ring-[rgba(201,168,76,0.1)] focus:ring-4 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="ui-font text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 outline-none focus:border-[var(--gold)] focus:ring-[rgba(201,168,76,0.1)] focus:ring-4 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="ui-font text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 block">
                    Tell Me About Your Goals
                  </label>
                  <textarea
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    placeholder="Vision, goals, and project timelines..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 outline-none resize-none focus:border-[var(--gold)] focus:ring-[rgba(201,168,76,0.1)] focus:ring-4 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] text-white font-semibold ui-font text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-[0_4px_15px_rgba(201,168,76,0.25)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.45)] hover:translate-y-[-1px] disabled:opacity-50 transition-all duration-200 select-none cursor-none"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;