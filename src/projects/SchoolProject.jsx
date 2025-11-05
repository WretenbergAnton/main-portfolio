import { ExternalLink, Github } from "lucide-react";

const schoolProjects = [
  {
    id: 1,
    title: "BlackJack Terminal Game",
    description:
      "Interactive blackjack game built for the terminal with JavaScript.",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/WretenbergAnton/BlackJack-TerminalGame",
    liveUrl: false,
    image: "/images/blackJackTerminalGame.png", // <-- Lägg bilden här
  },
  
];

export default function SchoolProject() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col items-center pt-24 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-blue-400">
          School Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here you’ll find my school-related React, Java, and backend projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {schoolProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900 border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400 transition-all hover:shadow-blue-500/20 hover:shadow-lg flex flex-col" // Lägg till flex flex-col här
          >
            {/* Image */}
            <div className="w-full h-48 bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {" "}
              {/* Ändra till flex-1 istället för h-full */}
              <div className="flex-1">
                {" "}
                {/* Lägg till flex-1 här */}
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500/10 text-slate-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* GitHub Link - detta kommer nu alltid synas längst ner */}
              <div className="flex gap-3 mt-4">
                {" "}
                {/* Lägg till mt-4 för margin */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded hover:bg-white/10 transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />{" "}
                    {/* Ökade storleken lite */}
                  </a>
                )}
                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-white/10 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
