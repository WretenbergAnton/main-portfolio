import { Box, Code } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ title, description, icon: Icon, link }) {
  return (
    <Link
      to={link}
      className="p-8 rounded-2xl transition-all hover:shadow-2xl cursor-pointer block bg-background border border-foreground opacity-90 hover:opacity-100 hover:border-blue-500 no-underline group"
    >
      <div className="mb-4">
        <Icon size={48} color="#3B82F6" />
      </div>
      <h3 className="text-3xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-lg opacity-60 text-foreground">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-blue-500 font-semibold">
        <span>View Projects</span>
        <span>→</span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section className="px-6 pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="School Projects"
              description="Projects created as part of my education"
              icon={Box}
              link="/projects/school"
            />
            <ProjectCard
              title="Personal Projects"
              description="Side projects and personal experiments"
              icon={Code}
              link="/projects/personal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
