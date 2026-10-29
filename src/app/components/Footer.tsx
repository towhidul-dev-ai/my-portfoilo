"use client"
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Featured Projects", href: "/project" },
  { label: "Experience", href: "/experiences" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

function SocialIcon({
  name,
}: {
  name: "github" | "linkedin" | "email";
}) {
  if (name === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.6 1.3a12.5 12.5 0 0 1 6.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/towhidul-dev-ai",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/towhidul-islam-shahed/",
    icon: "linkedin" as const,
  },
  {
    name: "Email",
    href: "mailto:shahedtowhidulislam6@gmail.com",
    icon: "email" as const,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#07111f] text-slate-300">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8 sm:pt-14">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold text-[#07111f] shadow-sm shadow-emerald-500/20">
                T
              </span>

              <span className="text-base font-extrabold tracking-tight text-white">
                Towhidul<span className="text-emerald-400">.</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-400">
              Passionate Frontend Developer specializing in building clean,
              responsive, and user-centric web applications with React.js and
              modern technologies.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to Junior Frontend / Full-Stack Opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-2.5"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-400 transition-colors duration-200 hover:text-emerald-400"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/cv.pdf"
                download="Towhidul-Islam-Shahed-CV.pdf"
                className="mt-1 text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Resume / CV <span aria-hidden="true">→</span>
              </a>
            </nav>
          </div>

          {/* Contact and social links */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </h3>

            <p className="max-w-xs text-xs leading-5 text-slate-400">
              Have a question or looking to hire? Feel free to reach out anytime.
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.icon === "email" ? undefined : "_blank"}
                  rel={
                    social.icon === "email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                >
                  <SocialIcon name={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Towhidul Islam Shahed. Designed &amp; Built with React &amp;
            Tailwind CSS.
          </p>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 self-start font-medium transition-colors hover:text-emerald-400 sm:self-auto"
          >
            Back to top{" "}
            <span className="text-sm text-emerald-400" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
