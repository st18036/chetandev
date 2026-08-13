import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/lib/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="03"
          label="Skills"
          title="Skill matrix"
          blurb="Technical proficiency across the stack, tooling, and embedded systems. Bars fill as you scroll into view."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 60}>
              <div className="glass rounded-2xl p-6 sm:p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-primary/70">0{gi + 1}</span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{group.category}</h3>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="font-mono text-xs text-muted-foreground">{group.skills.length}</span>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} skill={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const label = skill.level >= 85 ? "Expert" : skill.level >= 75 ? "Confident" : skill.level >= 65 ? "Solid" : "Learning";

  return (
    <div ref={ref} className="group">
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
          {label} · {skill.level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-background/60 border border-border/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-[width] duration-1000 ease-out"
          style={{
            width: shown ? `${skill.level}%` : 0,
            boxShadow: shown ? "0 0 12px hsl(var(--primary) / 0.5)" : "none",
          }}
        />
      </div>
    </div>
  );
}