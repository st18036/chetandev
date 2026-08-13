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
          title="Growth matrix"
          blurb="Technical proficiency across the stack, tooling, and embedded systems. Node brightness reflects comfort level."
        />

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 60}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-primary/70">0{gi + 1}</span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{group.category}</h3>
                  <div className="flex-1 h-px bg-border/50" />
                </div>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((s) => (
                    <SkillNode key={s.name} skill={s} />
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

function SkillNode({ skill }) {
  const size = 44 + (skill.level / 100) * 52; // 44px - 96px
  const glow = 0.15 + (skill.level / 100) * 0.5;
  const label = skill.level >= 85 ? "Expert" : skill.level >= 75 ? "Confident" : "Familiar";
  return (
    <div className="group relative flex flex-col items-center gap-2" title={`${skill.name} · ${skill.level}%`}>
      <div
        className="relative grid place-items-center rounded-full border transition-transform group-hover:scale-110"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderColor: `rgba(163, 230, 53, ${0.2 + (skill.level / 100) * 0.4})`,
          background: `radial-gradient(circle, rgba(163,230,53,${glow * 0.25}) 0%, transparent 70%)`,
          boxShadow: `0 0 ${glow * 30}px rgba(163, 230, 53, ${glow})`,
        }}
      >
        <span className="font-mono text-[10px] font-bold text-primary">{skill.name.slice(0, 2).toUpperCase()}</span>
      </div>
      <span className="text-xs text-muted-foreground text-center max-w-[88px] leading-tight">{skill.name}</span>
      <span className="absolute -top-1 right-0 font-mono text-[9px] text-primary/60 opacity-0 group-hover:opacity-100 transition">{label}</span>
    </div>
  );
}