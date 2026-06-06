import { motion } from "framer-motion";

const Contact = () => {
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

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h3 className="text-3xl font-semibold mb-6 text-blue-400">

              Let's Work Together

            </h3>

            <p className="text-gray-400 leading-8 text-lg">

              Feel free to contact me for internships,
              collaborations, freelance work,
              or AI & web development projects.

            </p>

            <div className="mt-10 space-y-6">

              <div>

                <h4 className="font-semibold text-xl">
                  Email
                </h4>

                <p className="text-gray-400 mt-2">
                  dharshini.yura@gmail.com
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-xl">
                  Location
                </h4>

                <p className="text-gray-400 mt-2">
                  Tirupur, Tamil Nadu
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side Form */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl font-semibold"
            >

              Send Message

            </button>

          </motion.form>

        </div>

      </div>

    </section>

  )
}

export default Contact