import { ShieldCheck } from "lucide-react";

export default function OAuthConsent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center">
        <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />

        <h1 className="font-display text-2xl font-bold mb-3">
          Authorization unavailable
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          This application does not require external authorization.
        </p>

        <a
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            mt-6
            rounded-xl
            bg-primary
            text-primary-foreground
            px-5
            py-3
            font-medium
            transition
            hover:opacity-90
          "
        >
          Return Home
        </a>
      </div>
    </div>
  );
}