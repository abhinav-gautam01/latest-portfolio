import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiFramer,
  SiPuppeteer,
  SiJsonwebtokens,
} from "react-icons/si";

interface Skill {
  name: string;
  category: string;
  icon: IconType;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend Development", icon: SiReact },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "JavaScript", category: "Web Development", icon: SiJavascript },
  { name: "Tailwind CSS", category: "Styling Framework", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend Engineering", icon: SiNodedotjs },
  { name: "Express", category: "Backend Framework", icon: SiExpress },
  { name: "MongoDB", category: "Database", icon: SiMongodb },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "Prisma", category: "ORM", icon: SiPrisma },
  { name: "HTML5", category: "Web Foundation", icon: SiHtml5 },
  { name: "CSS3", category: "Web Foundation", icon: SiCss },
  { name: "Git", category: "Version Control", icon: SiGit },
  { name: "GitHub", category: "Version Control", icon: SiGithub },
  { name: "Vite", category: "Build Tooling", icon: SiVite },
  { name: "Framer Motion", category: "Animation", icon: SiFramer },
  { name: "Puppeteer", category: "Automation", icon: SiPuppeteer },
  { name: "JWT", category: "Authentication", icon: SiJsonwebtokens },
];

const SkillChip = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-3 border border-border bg-secondary/40 rounded-xl px-5 py-4 shrink-0 min-w-[240px]">
      <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-foreground" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-sm truncate">{skill.name}</p>
        <p className="text-xs text-muted-foreground truncate">{skill.category}</p>
      </div>
    </div>
  );
};

const midpoint = Math.ceil(skills.length / 2);
const rowOne = skills.slice(0, midpoint);
const rowTwo = skills.slice(midpoint);

const MarqueeRow = ({
  items,
  reverse,
}: {
  items: Skill[];
  reverse?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 2;
    if (el.scrollLeft >= singleSetWidth) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth;
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="group w-full overflow-x-auto no-scrollbar"
    >
      <div
        className={`flex w-max gap-4 px-6 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="container px-6">
        {/* Oversized section title */}
        <h2 className="font-sans font-bold uppercase tracking-tighter leading-none text-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Skills
        </h2>

        <div className="h-px bg-border mt-8 mb-16" />

        {/* Tagline */}
        <p className="font-bold text-3xl md:text-5xl leading-tight text-foreground max-w-2xl mb-16">
          Real Tools,
          <br />
          Real Projects.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
};

export default TechStack;
