import { Goal, Fish, Camera, Mountain } from "lucide-react";
import { personal } from "@/lib/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = { Football: Goal, Fish, Camera, Mountain };

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="01"
          label="About"
          title="Rooted in curiosity"
          blurb="A bit about who I am when I'm not shipping code."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 sm:p-9 h-full">
              <p className="text-lg leading-relaxed text-foreground/90">{personal.summary}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-background/40 border border-border/60 p-4">
                  <div className="font-mono text-xs text-primary/80 mb-1">education</div>
                  <div className="text-sm">BE(Hons) Software Engineering</div>
                  <div className="text-sm text-muted-foreground">Auckland University of Technology</div>
                </div>
                <div className="rounded-xl bg-background/40 border border-border/60 p-4">
                  <div className="font-mono text-xs text-primary/80 mb-1">status</div>
                  <div className="text-sm">Final year · coursework complete</div>
                  <div className="text-sm text-muted-foreground">Seeking 800-hour internship</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={120}>
            <div className="flex flex-col gap-4 h-full">
              <div className="glass rounded-2xl p-6 flex-1">
                <div className="font-mono text-xs text-primary/80 tracking-[0.2em] uppercase mb-4">Beyond the keyboard</div>
                <div className="grid grid-cols-2 gap-3">
                  {personal.hobbies.map((h) => {
                    const Icon = iconMap[h.icon] || Mountain;
                    return (
                      <div key={h.name} className="rounded-xl bg-background/40 border border-border/60 p-4 hover:border-primary/40 transition group">
                        <Icon className="h-5 w-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-medium">{h.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{h.blurb}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}