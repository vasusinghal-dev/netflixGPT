import React from "react";
import Logo from "../assets/Logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRocket,
  FaWrench,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <img src={Logo} alt="Netflix Logo" className="w-36 object-contain" />
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <FaWrench className="text-yellow-500 text-2xl" />
            </div>
            <span className="text-yellow-500 font-semibold text-lg">
              🚧 Under Reconstruction
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            TrailerFlix is temporarily down — and that's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              intentional
            </span>
            .
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Last week, I launched TrailerFlix, a movie discovery platform. After
            deployment, I realized something important:
          </p>

          <div className="bg-gray-900/80 border-l-4 border-red-500 pl-6 py-4 mb-8">
            <p className="text-xl font-semibold">
              👉 Some APIs were being called directly from the frontend — not
              the right approach for a production-ready app.
            </p>
          </div>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Instead of patching it halfway, I chose to step back and do it
            properly.
          </p>

          {/* Progress Timeline */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Current Upgrade Journey</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold">Learning Next.js</h3>
                </div>
                <p className="text-gray-400">
                  Mastering server-side rendering and API routes
                </p>
              </div>

              <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 opacity-70">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FaDatabase className="text-green-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">Database & Auth</h3>
                </div>
                <p className="text-gray-400">
                  Secure data management and user authentication
                </p>
              </div>

              <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 opacity-50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <FaShieldAlt className="text-purple-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">Rebuild & Launch</h3>
                </div>
                <p className="text-gray-400">
                  Scalable architecture with enhanced security
                </p>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-xl p-8 mb-8">
            <p className="text-xl italic text-center">
              "This pause is intentional. It's part of the learning + building
              journey."
            </p>
          </div>

          {/* Final Promise */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              TrailerFlix will be back —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                stronger, faster, and more secure
              </span>
              . 🚀
            </h2>
            <p className="text-gray-300 text-lg">Stay tuned 👀</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TrailerFlix. All rights reserved.</p>
          <p className="mt-2">Building with purpose, one line at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
