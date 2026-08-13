import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title, blurb }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-primary/80 tracking-[0.3em]">{index}</span>
        <span className="h-px w-10 bg-primary/40" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">{title}</h2>
      {blurb && <p className="mt-4 max-w-2xl text-muted-foreground text-balance">{blurb}</p>}
    </Reveal>
  );
}