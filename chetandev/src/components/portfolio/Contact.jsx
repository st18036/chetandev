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


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("loading");
    setError("");

    try {

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
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
        err?.text || "Failed to send message."
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
          blurb="Open to internship conversations, collaborations, and opportunities to build impactful software systems."
        />


        <div className="grid lg:grid-cols-2 gap-8">


          {/* Contact Information */}

          <Reveal>

            <div className="
              glass
              rounded-2xl
              p-8
              flex
              flex-col
              gap-8
            ">


              <div className="space-y-6">

                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={personal.email}
                />


                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={personal.phone}
                />


                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={personal.location}
                />


              </div>



              <div className="flex gap-3 flex-wrap">


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


              </div>


              <div className="
                mt-auto
                rounded-xl
                bg-background/40
                border
                border-border/60
                p-4
              ">

                <p className="
                  text-sm
                  text-muted-foreground
                ">
                  Currently seeking an 800-hour industry internship for graduation.
                </p>

              </div>


            </div>

          </Reveal>




          {/* Contact Form */}


          <Reveal delay={120}>


            <form
              onSubmit={handleSubmit}
              className="
                glass
                rounded-2xl
                p-8
                flex
                flex-col
                gap-5
              "
            >


              {status === "success" ? (

                <div className="
                  text-center
                  py-12
                ">

                  <CheckCircle2
                    className="
                      h-12
                      w-12
                      mx-auto
                      text-primary
                      mb-4
                    "
                  />


                  <h3 className="
                    text-xl
                    font-bold
                  ">
                    Message Sent
                  </h3>


                  <p className="
                    mt-2
                    text-muted-foreground
                  ">
                    Thanks for reaching out. I will get back to you soon.
                  </p>


                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="
                      mt-6
                      text-primary
                      hover:underline
                    "
                  >
                    Send another
                  </button>


                </div>


              ) : (

                <>


                  <FormInput
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />


                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />



                  <div>

                    <label className="
                      text-sm
                      text-muted-foreground
                    ">
                      Message
                    </label>


                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell me about the opportunity..."
                      className="
                        input-base
                        mt-2
                        resize-none
                      "
                    />

                  </div>



                  {error && (

                    <p className="
                      text-sm
                      text-red-500
                    ">
                      {error}
                    </p>

                  )}



                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      py-3
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:opacity-90
                      transition
                    "
                  >

                    {
                      status === "loading"
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Send className="h-4 w-4" />
                    }


                    {
                      status === "loading"
                        ? "Sending..."
                        : "Send Message"
                    }


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




function ContactItem({
  icon: Icon,
  label,
  value,
}) {

  return (

    <div className="
      flex
      items-center
      gap-4
    ">


      <div className="
        h-11
        w-11
        rounded-xl
        bg-background/40
        flex
        items-center
        justify-center
      ">

        <Icon
          className="
            h-5
            w-5
            text-primary
          "
        />

      </div>


      <div>

        <p className="
          text-xs
          text-muted-foreground
        ">
          {label}
        </p>


        <p className="font-medium">
          {value}
        </p>


      </div>


    </div>

  );

}





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
        flex
        items-center
        gap-2
        rounded-xl
        border
        px-4
        py-2
        hover:border-primary
        transition
      "
    >

      <Icon className="h-4 w-4" />

      {label}

    </a>

  );

}




function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {

  return (

    <div>

      <label className="
        text-sm
        text-muted-foreground
      ">
        {label}
      </label>


      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          input-base
          mt-2
        "
      />


    </div>

  );

}