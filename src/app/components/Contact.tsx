
import Link from "next/link";
import ContactForm from "./ContactForm";

const email = "shahedtowhidulislam6@gmail.com";

const contactDetails = [
  {
    label: "EMAIL",
    value: email,
    href: `mailto:${email}`,
    icon: "email",
  },
 {
  label: "PHONE",
  value: "+8801845587925",
  href: "tel:+8801845587925",
  icon: "phone",
},
  {
    label: "LOCATION",
    value: "Chattogram, Bangladesh",
    href: "https://maps.google.com/?q=Chattogram,Bangladesh",
    icon: "location",
  },
];

function ContactIcon({ name }: { name: string }) {
  if (name === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "phone") {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 3.18 2 2 0 0 1 4.07 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.77 2.04Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SocialIcon({
  brand,
}: {
  brand: "linkedin" | "github" | "google";
}) {
  if (brand === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
      </svg>
    );
  }

  if (brand === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.6 1.3a12.5 12.5 0 0 1 6.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.7a12 12 0 0 1 0-7.4v-5.2H5.8a20 20 0 0 0 0 17.8l6.8-5.2Z"
      />
      <path
        fill="#EA4335"
        d="M24 11.9c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4Z"
      />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/towhidul-islam-shahed/",
    brand: "linkedin" as const,
    className: "bg-[#0A78B8] hover:bg-[#08669d]",
  },
  {
    name: "GitHub",
    href: "https://github.com/towhidul-dev-ai",
    brand: "github" as const,
    className: "bg-slate-800 hover:bg-slate-700",
  },
  {
    name: "Google / Gmail",
    href: `mailto:${email}`,
    brand: "google" as const,
    className: "bg-white text-slate-900 hover:bg-slate-200",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#07111f] px-5 py-20 text-slate-100 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Reach Out
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[42px]">
            Let&apos;s Connect
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-emerald-400" />
        </div>

        {/* Contact details and form */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          {/* Left column */}
          <div className="pt-1">
            <h3 className="mb-4 text-xl font-bold">Get in Touch</h3>

            <p className="mb-7 text-sm leading-[1.9] text-slate-400">
              I&apos;m always open to discussing new opportunities,
              creative ideas, and projects. Feel free to reach out
              using the form or contact me directly by email.
            </p>

            <div className="space-y-3.5">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LOCATION" ? "_blank" : undefined}
                  rel={item.label === "LOCATION" ? "noreferrer" : undefined}
                  className="group flex min-h-[78px] items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/70 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-slate-900"
                >
                  <span className="flex h-10 w-6 shrink-0 items-center justify-center text-emerald-400">
                    <ContactIcon name={item.icon} />
                  </span>

                  <span className="min-w-0">
                    <span className="mb-1 block text-[10px] font-medium tracking-[0.16em] text-slate-400">
                      {item.label}
                    </span>

                    <span className="block break-words text-[13px] font-semibold text-slate-100">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold">Social Profiles</h4>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-300 hover:-translate-y-1 ${social.className}`}
                  >
                    <SocialIcon brand={social.brand} />
                  </Link>
                ))}
              </div>
            </div>

            {/* CV download */}
            <a
              href="/cv.pdf"
              download="Towhidul-Islam-Shahed-CV.pdf"
              className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 16v4h14v-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Right column: working contact form */}
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/80 p-6 shadow-xl shadow-black/10 sm:p-8">
            <h3 className="mb-2 text-lg font-semibold">
              Send Me a Message
            </h3>

            <p className="mb-7 text-sm leading-6 text-slate-400">
              Have a question or an opportunity? Send me a message.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
