import { ImagePlus } from "lucide-react";
import { personal } from "@/lib/portfolioData";

export default function HeroPortrait() {
  if (personal.heroImage) {
    return (
      <div className="relative mx-auto max-w-sm">
        <div className="absolute -inset-3 rounded-3xl bg-primary/20 blur-2xl float-soft" />

        <img
          src={personal.heroImage}
          alt="Chetan Dev"
          className="relative rounded-3xl border border-primary/30 aspect-[3/4] w-full object-cover glow-ring"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -inset-3 rounded-3xl bg-primary/15 blur-2xl float-soft" />

      <div className="relative rounded-3xl glass aspect-[3/4] p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-primary/30">
        <div className="grid place-items-center h-20 w-20 rounded-full bg-background/60 border border-primary/30 mb-5">
          <ImagePlus className="h-8 w-8 text-primary" />
        </div>

        <div className="font-display font-semibold">
          Your photo here
        </div>

        <div className="text-xs text-muted-foreground mt-2 max-w-[200px] leading-relaxed">
          Add an image to{" "}
          <code className="text-primary font-mono">
            heroImage
          </code>{" "}
          in portfolioData.js to display your portrait.
        </div>
      </div>
    </div>
  );
}