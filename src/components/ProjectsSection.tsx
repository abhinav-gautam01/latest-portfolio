import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  category: "Web" | "Full-Stack";
  description: string;
  techStack: string[];
  github: string;
  live?: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "Medium Clone",
    category: "Full-Stack",
    description:
      "Full-featured blog platform with authentication, profile creation, and content posting.",
    techStack: ["React", "TypeScript", "Hono", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/abhinav-gautam01/medium",
  },
  {
    name: "SimplPay",
    category: "Full-Stack",
    description:
      "Peer-to-peer payment app with JWT-based authentication and secure transactions.",
    techStack: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/abhinav-gautam01/Simplpay",
  },
  {
    name: "BurgerBliss",
    category: "Web",
    description:
      "Responsive multi-section restaurant website with a focus on UI/UX and smooth interactivity.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/abhinav-gautam01/Burger-Bliss",
    image: "/burgerBliss.png",
  },
];

const filters = ["All", "Web", "Full-Stack"] as const;
type Filter = (typeof filters)[number];

const ProjectPreview = ({ name, image }: { name: string; image?: string }) => (
  <div className="w-full h-full overflow-hidden border border-border rounded-xl">
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full bg-secondary/40 flex flex-col"
    >
      {image ? (
        <img
          src={image}
          alt={`${name} preview`}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <>
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border shrink-0">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-serif text-2xl md:text-4xl text-muted-foreground/40 tracking-wide text-center px-4">
              {name}
            </span>
          </div>
        </>
      )}
    </motion.div>
  </div>
);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-3">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`GitHub repository for ${project.name}`}
      onClick={(e) => e.stopPropagation()}
      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      <Github className="w-4 h-4" />
    </a>
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Live demo for ${project.name}`}
        onClick={(e) => e.stopPropagation()}
        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    )}
  </div>
);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );
  const [featured, ...rest] = filtered;

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Oversized section title */}
          <h2 className="font-sans font-bold uppercase tracking-tighter leading-none text-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8">
            Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex items-center gap-6 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative text-xs font-mono uppercase tracking-wide pb-2 transition-colors duration-300 ${
                  activeFilter === f
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "All" ? f : `[${f}]`}
                {activeFilter === f && (
                  <motion.span
                    layoutId="project-filter-underline"
                    className="absolute left-0 right-0 bottom-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="h-px bg-border mb-12" />

          {/* Featured project */}
          <AnimatePresence mode="wait">
            {featured && (
              <motion.div
                key={featured.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="aspect-video md:aspect-[21/9] relative"
                >
                  <ProjectPreview name={featured.name} image={featured.image} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between bg-gradient-to-t from-background/95 to-transparent">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {featured.name}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                        {featured.category}
                      </span>
                    </div>
                    <ProjectLinks project={featured} />
                  </div>
                </motion.div>
                <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl">
                  {featured.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-px bg-border mb-12" />

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {rest.map((project, index) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <div className="aspect-video mb-4">
                    <ProjectPreview name={project.name} image={project.image} />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                    <span className="text-[10px] font-mono border border-border px-2 py-0.5 rounded-full text-muted-foreground uppercase whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <ProjectLinks project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View more */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/abhinav-gautam01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wide border-b border-foreground pb-0.5 text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              View More Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
