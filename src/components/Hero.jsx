import {
  ArrowRight,
  MapPin,
  User,
  Monitor,
  Calendar,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative mt-10 flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial gradient */}
      <div
        id="about"
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Blurred circles */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            {/* About badge */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">About Me</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Hi, I'm Anton
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Wretenberg
              </span>
            </h1>

            {/* Info items */}
            <div className="flex flex-col gap-3 mb-8 text-lg justify-center items-center lg:items-start mx-auto lg:mx-0 text-left text-gray-300/80">
              <div className="flex flex-col items-start space-y-2 animate-in slide-in-from-bottom delay-100 duration-700">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-500" />
                  <span>Based in Kalmar, Sweden</span>
                </div>
                <div className="flex items-center gap-3">
                  <User size={20} className="text-blue-500" />
                  <span>Web Development Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor size={20} className="text-blue-500" />
                  <span>Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-blue-500" />
                  <span>21 Years Old</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              As a passionate student developer, I enjoy combining creativity
              with problem-solving to build modern and user-friendly web
              applications. I’m focused on learning new technologies and
              improving my skills to create efficient, scalable, and visually
              appealing projects.{" "}
            </p>

            {/* Projects button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-gray-300 animate-in slide-in-from-bottom delay-300 duration-700">
              <div>
                <div className="text-5xl font-bold mb-2 text-blue-500">2+</div>
                <div className="opacity-60">Years of Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-blue-500">10+</div>
                <div className="opacity-60">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-blue-500">5+</div>
                <div className="opacity-60">Technologies</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-blue-500">
                  100%
                </div>
                <div className="opacity-60">Dedication</div>
              </div>
            </div>
          </div>

          {/* Empty right side */}
          <div className="relative order-2 w-full"></div>
        </div>
      </div>
    </section>
  );
}
