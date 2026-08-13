import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { personal } from "@/lib/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (e) => {
    setForm((current) => ({
      ...current,
      [field]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS environment variables are missing."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        publicKey
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setStatus("error");

      setError(
        err?.text ||
          err?.message ||
          "Something went wrong sending your message. Please try emailing me directly."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
    >
      <div className="section-shell">

        <SectionHeading
          index="05"
          label="Contact"
          title="Get in touch"
          blurb="Open to internship conversations, collaborations, and a good chat about building things. Drop a message below."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {/* CONTACT INFORMATION */}
          <Reveal>
            <div className="glass rounded-2xl p-7 sm:p-9 h-full flex flex-col">

              <div className="space-y-5">

                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />

                <ContactRow
                  icon={Phone}
                  label="Phone"
                  value={personal.phone}
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                />

                <ContactRow
                  icon={MapPin}
                  label="Location"
                  value={personal.location}
                />

              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {personal.linkedin && (
                  <SocialButton
                    href={personal.linkedin}
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                )}

                {personal.github && (
                  <SocialButton
                    href={personal.github}
                    icon={Github}
                    label="GitHub"
                  />
                )}

                {personal.cvUrl && (
                  <a
                    href={personal.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      px-5
                      py-3
                      font-medium
                      hover:opacity-90
                      transition
                    "
                  >
                    Download CV
                  </a>
                )}

              </div>

              {/* INTERNSHIP STATUS */}
              <div className="mt-auto pt-8">

                <div
                  className="
                    rounded-xl
                    bg-background/40
                    border
                    border-border/60
                    p-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      data-pulse
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-primary
                      flex-shrink-0
                    "
                  />

                  <span className="text-sm text-muted-foreground">
                    Currently seeking an internship
                    to further my career.
                  </span>
                </div>

              </div>

            </div>
          </Reveal>

          {/* CONTACT FORM */}
          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="
                glass
                rounded-2xl
                p-7
                sm:p-9
                h-full
                flex
                flex-col
              "
            >

              {status === "success" ? (

                <div
                  className="
                    flex-1
                    grid
                    place-items-center
                    text-center
                    py-10
                  "
                >

                  <div>

                    <CheckCircle2
                      className="
                        h-12
                        w-12
                        text-primary
                        mb-4
                        mx-auto
                        float-soft
                      "
                    />

                    <h3 className="font-display text-xl font-bold mb-2">
                      Message sent
                    </h3>

                    <p className="text-muted-foreground max-w-xs mx-auto">
                      Thanks for reaching out — I'll get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setError("");
                      }}
                      className="
                        mt-6
                        text-sm
                        text-primary
                        hover:underline
                      "
                    >
                      Send another
                    </button>

                  </div>

                </div>

              ) : (

                <>

                  <div className="space-y-5 flex-1">

                    <Field
                      label="Name"
                      htmlFor="name"
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        className="input-base"
                      />
                    </Field>

                    <Field
                      label="Email"
                      htmlFor="email"
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className="input-base"
                      />
                    </Field>

                    <Field
                      label="Message"
                      htmlFor="message"
                    >
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell me about the opportunity or just say hi…"
                        className="
                          input-base
                          resize-none
                        "
                      />
                    </Field>

                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      px-6
                      py-3.5
                      font-medium
                      hover:opacity-90
                      transition
                      disabled:opacity-60
                      glow-ring
                    "
                  >

                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}

                    {status === "loading"
                      ? "Sending…"
                      : "Send message"}

                  </button>

                </>

              )}

            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


/* CONTACT ROW */

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <div className="flex items-center gap-4 group">

      <div
        className="
          grid
          place-items-center
          h-11
          w-11
          rounded-xl
          bg-background/40
          border
          border-border/60
          group-hover:border-primary/40
          transition
        "
      >
        <Icon className="h-4 w-4 text-primary" />
      </div>

      <div>

        <div
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-muted-foreground
          "
        >
          {label}
        </div>

        <div
          className="
            text-sm
            font-medium
            group-hover:text-primary
            transition
          "
        >
          {value}
        </div>

      </div>

    </div>
  );

  if (!href) {
    return <div>{content}</div>;
  }

  const isInternalProtocol =
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <a
      href={href}
      target={isInternalProtocol ? undefined : "_blank"}
      rel={
        isInternalProtocol
          ? undefined
          : "noopener noreferrer"
      }
    >
      {content}
    </a>
  );
}


/* SOCIAL BUTTON */

function SocialButton({
  href,
  icon: Icon,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        glass
        px-5
        py-3
        font-medium
        hover:border-primary/40
        transition
        glitch
      "
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}


/* FORM FIELD */

function Field({
  label,
  htmlFor,
  children,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block"
    >
      <span
        className="
          font-mono
          text-xs
          text-muted-foreground
          tracking-wide
        "
      >
        {label}
      </span>

      <div className="mt-2">
        {children}
      </div>
    </label>
  );
}