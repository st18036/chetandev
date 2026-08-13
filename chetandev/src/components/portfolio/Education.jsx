import { GraduationCap, Briefcase } from "lucide-react";
import { timeline } from "@/lib/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="04"
          label="Journey"
          title="Stratigraphy"
          blurb="The layers that built me — education and experience, most recent on top."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border/60" aria-hidden="true">
            <div className="absolute inset-0 gradient-line origin-top" style={{ transformOrigin: "top", animation: "grow-line 1.2s ease-out forwards" }} />
          </div>

          <div className="space-y-10">
            {timeline
              .slice()
              .reverse()
              .map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="relative pl-12 sm:pl-16">
                    <div className="absolute left-0 top-1 grid place-items-center h-8 w-8 sm:h-12 sm:w-12 rounded-xl glass">
                      {item.type === "education" ? (
                        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      ) : (
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      )}
                    </div>
                    <div
                      className={`glass rounded-2xl p-5 sm:p-7 hover:border-primary/40 transition ${
                        item.type === "work" ? "border-l-2 border-l-primary/50" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">{item.title}</h3>
                        <span className="font-mono text-xs text-primary/80">{item.period}</span>
                      </div>
                      <div className="text-sm font-medium text-foreground/90 mb-2">{item.org}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}