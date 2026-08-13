import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personal } from "@/lib/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/50 mt-10">
      <div className="section-shell py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm glow-ring">CD</span>
            <div>
              <div className="font-display text-sm font-semibold">{personal.name}</div>
              <div className="text-xs text-muted-foreground">© {year} · Built with care in Auckland</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="grid place-items-center h-10 w-10 rounded-lg glass hover:border-primary/40 transition glitch" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="grid place-items-center h-10 w-10 rounded-lg glass hover:border-primary/40 transition glitch" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href={`mailto:${personal.email}`} className="grid place-items-center h-10 w-10 rounded-lg glass hover:border-primary/40 transition" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" className="grid place-items-center h-10 w-10 rounded-lg bg-primary text-primary-foreground transition hover:opacity-90" aria-label="Download CV"><Download className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}