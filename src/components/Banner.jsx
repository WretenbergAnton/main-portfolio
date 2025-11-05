
import { useState } from "react";

export default function Banner() {
  const [showPopup, setShowPopup] = useState(false);

  const skills = [
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Git",
    "React",
    "MongoDB",
    "Express",
    "JavaScript",
  ];

  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-white mb-6">
          My Skills
        </h1>

        {/* Button for mobile/tablet */}
        <div className="lg:hidden flex justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="border border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            View All Skills
          </button>
        </div>

        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-8 gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border border-white text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">My Skills</h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-white text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}