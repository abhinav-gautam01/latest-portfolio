import { motion } from "framer-motion";

const experiences = [
  {
    company: "RDash",
    tag: "YC W22",
    role: "SDE",
    duration: "Jun 2025 – Present",
    description: [
      "Engineering scalable frontend systems at RDash, owning complex workflows across document generation, template building, project management, and data-heavy applications.",
      "Building production features with React, TypeScript, Redux, and RTK Query, from architecture and state management to API integration and performance.",
      "Driving end-to-end feature ownership and solving complex UI, data, export, and production reliability challenges.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Oversized section title */}
          <h2 className="font-sans font-bold uppercase tracking-tighter leading-none text-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Experience
          </h2>

          <div className="h-px bg-border mt-8 mb-16" />

          {/* Tagline */}
          <p className="font-bold text-3xl md:text-5xl leading-tight text-foreground max-w-2xl mb-16">
            Shipped Features,
            <br />
            Not Just Tickets.
          </p>

          {/* Entries */}
          <div className="divide-y divide-border">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 md:gap-12 py-12"
              >
                {/* Company logo */}
                <div className="aspect-[4/3] md:aspect-auto border-2 border-border rounded-xl overflow-hidden group">
                  <img
                    src="/rdashLogo.png"
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap pt-1">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-base md:text-lg text-muted-foreground">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono border border-border px-2.5 py-0.5 rounded-full text-muted-foreground">
                      {exp.tag}
                    </span>
                  </div>
                  <ul className="space-y-2 max-w-xl">
                    {exp.description.map((line, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-muted-foreground/60 mt-1.5 shrink-0">–</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
