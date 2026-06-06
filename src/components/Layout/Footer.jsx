import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="border-t border-slate-800 py-10 mt-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-2xl font-bold">

            DHARSHINI M

          </h2>

          <p className="text-gray-500 mt-2">

            AI • Full Stack • Data Analytics Developer

          </p>

        </div>

        {/* Social Icons */}

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/DharshiniManivannan16"
            target="_blank"
            className="hover:text-blue-400 transition"
          >

            <FaGithub />

          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >

            <FaLinkedin />

          </a>

        </div>

      </div>

      <p className="text-center text-gray-600 mt-8">

        © 2026 DHARSHINI M • All Rights Reserved

      </p>

    </footer>

  )
}

export default Footer