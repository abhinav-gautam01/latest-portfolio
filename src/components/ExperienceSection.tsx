import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experience = {
    company: "RDash (YC W22)",
    role: "SDE Intern",
    location: "Gurgaon, Haryana",
    duration: "June 2025 – Present",
    highlights: [
      "Built responsive landing and download pages improving user onboarding",
      "Developed real-time PDF generation and export system using Puppeteer",
      "Created a full-scale Template Builder with live preview, JSON configuration, theming, and Jinja templating",
      "Implemented advanced PDF export features (headers, footers, margins, orientation)",
      "Built a smart Calendar module with recurrence rules and exception handling",
      "Worked on maps and data visualization for analytics features",
    ],
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8 glass-hover"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {experience.role}{" "}
                  <span className="text-primary">@ {experience.company}</span>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-mono bg-primary/10 px-3 py-1 rounded-full">
                  Y Combinator
                </span>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary mt-1.5">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
