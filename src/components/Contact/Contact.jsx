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
        "service_dhayadharsu",   // SERVICE ID
        "template_954eemo",      // TEMPLATE ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "JrbZuzCwaCvp4Bacp"      // PUBLIC KEY
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
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-blue-400">
              Let's Work Together
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              Feel free to contact me for internships, freelance work,
              AI projects, Full Stack Development and Data Analytics.
            </p>

            <div className="mt-10 space-y-6">
              <p className="text-gray-400">
                📧 dharshini.yura@gmail.com
              </p>

              <p className="text-gray-400">
                📍 Tirupur, Tamil Nadu, India
              </p>

              <a
                href="https://github.com/DharshiniManivannan16"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;