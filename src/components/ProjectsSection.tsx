import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: "BurgerBliss",
    description:
      "Responsive multi-section restaurant website with focus on UI/UX and smooth interactivity. Features modern design patterns and engaging user experience.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/abhinav-gautam01/Burger-Bliss",
  },
  {
    name: "SimplPay",
    description:
      "Peer-to-peer payment web application with JWT-based authentication, secure transactions, and a modern, intuitive user interface.",
    techStack: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/abhinav-gautam01/Simplpay",
  },
  {
    name: "Medium Clone",
    description:
      "Full-featured blog platform with authentication, profile creation, and content posting. Built with modern API-driven architecture.",
    techStack: ["React", "TypeScript", "Hono", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/abhinav-gautam01/medium",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group glass rounded-2xl p-6 md:p-8 glass-hover relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-xl font-bold">{project.name[0]}</span>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <Github className="w-5 h-5" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={`Live demo for ${project.name}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
