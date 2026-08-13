import { Download, Github } from "lucide-react";
import { personal } from "@/lib/portfolioData";

export default function CommandCenter() {
  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-2">
      <a
        href={personal.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-medium shadow-lg glow-ring hover:opacity-90 transition"
        title="Download CV"
      >
        <Download className="h-4 w-4" />
        <span className="hidden lg:inline">CV</span>
      </a>
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl glass-strong px-4 py-3 text-sm font-medium hover:border-primary/40 transition glitch"
        title="GitHub"
      >
        <Github className="h-4 w-4 text-primary" />
        <span className="hidden lg:inline">GitHub</span>
      </a>
    </div>
  );
}