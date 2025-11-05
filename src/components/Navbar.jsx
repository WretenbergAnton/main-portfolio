import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    navigate("/"); // Go home first
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Wait a bit for the home page to render
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-14 sm:h-16 md:h-20 bg-slate-950/20 backdrop-blur-sm">
        {!mobileMenuIsOpen && (
          <Link
            to="/"
            className="text-white font-bold text-lg sm:text-xl md:text-2xl hover:text-blue-400 transition-colors"
          >
            AW
          </Link>
        )}

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button
            onClick={() => handleNavClick("about")}
            className="text-gray-300 hover:text-white text-sm lg:text-base"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="text-gray-300 hover:text-white text-sm lg:text-base"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("testimonials")}
            className="text-gray-300 hover:text-white text-sm lg:text-base"
          >
            Testimonials
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white z-50"
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}
        >
          {mobileMenuIsOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      {mobileMenuIsOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-[9999] flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col justify-center items-center space-y-8">
            <button
              onClick={() => {
                handleNavClick("about");
                setMobileMenuIsOpen(false);
              }}
              className="text-3xl font-bold text-white hover:text-blue-400 animate-in slide-in-from-top duration-300 delay-100"
            >
              About
            </button>
            <button
              onClick={() => {
                handleNavClick("projects");
                setMobileMenuIsOpen(false);
              }}
              className="text-3xl font-bold text-white hover:text-blue-400 animate-in slide-in-from-top duration-300 delay-200"
            >
              Projects
            </button>
            <button
              onClick={() => {
                handleNavClick("testimonials");
                setMobileMenuIsOpen(false);
              }}
              className="text-3xl font-bold text-white hover:text-blue-400 animate-in slide-in-from-top duration-300 delay-300"
            >
              Testimonials
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
