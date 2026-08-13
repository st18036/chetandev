import { Github, Download, ArrowDown, MapPin } from "lucide-react";
import { personal } from "@/lib/portfolioData";
import MyceliumParticles from "./MyceliumParticles";
import HeroPortrait from "./HeroPortrait";

const heroImage = "https://media.base44.com/images/public/6a743eccd8f580716813c3f4/a50bca243_generated_image.png";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="absolute inset-0">
          <MyceliumParticles />
        </div>
      </div>

      <div className="section-shell relative w-full pt-28 pb-20 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 float-soft">
            <span className="data-pulse h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-xs text-muted-foreground tracking-wide">open to internship opportunities</span>
          </div>

          <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-balance">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-foreground/90">
              Chetan
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-primary text-glow">
              Dev
            </span>
          </h1>

          <p className="mt-6 font-mono text-sm sm:text-base text-muted-foreground tracking-wide uppercase">Software Engineering Student · Full-Stack · Embedded · Computer Vision

          </p>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Final-year BE(Hons) Software Engineering student at Auckland University of Technology,
            building full-stack web apps, embedded systems, and real-time computer vision. Seeking
            an 800-hour industry internship to graduate.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:opacity-90 transition glow-ring">
              
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-medium hover:border-primary/40 transition glitch">
              
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={personal.email && `mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium text-muted-foreground hover:text-foreground transition">
              
              Get in touch →
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary/70" />
            {personal.location}
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroPortrait />
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition group"
        aria-label="Scroll down">
        
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-primary" />
      </button>
    </section>);

}