import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/portfolioData";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="section-shell">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong" : "bg-transparent"
            }`}
          >
            <a href="#top" className="group flex items-center gap-2.5" onClick={(e) => { e.preventDefault(); go("#top"); }}>
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm glow-ring">
                CD
              </span>
              <span className="font-display text-sm font-semibold tracking-tight hidden sm:block">
                chetan<span className="text-primary">.</span>dev
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/40"
                >
                  <span className="font-mono text-[10px] text-primary/70 mr-1">0{links.indexOf(l) + 1}</span>
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                Download CV
              </a>
              <button
                onClick={() => setOpen(true)}
                className="md:hidden grid place-items-center h-10 w-10 rounded-lg glass"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col justify-center px-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-7 right-7 grid place-items-center h-11 w-11 rounded-xl glass"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="space-y-2">
            {links.map((l, i) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="block w-full text-left group"
              >
                <span className="font-mono text-xs text-primary/70">0{i + 1}</span>
                <div className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {l.label}
                </div>
              </button>
            ))}
          </nav>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium">
              Download CV
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 font-medium">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}