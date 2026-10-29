
import Link from "next/link";
const links = [
//   { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experiences" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
      <nav className="navbar mx-auto max-w-7xl px-5 md:px-10">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/#home"
            className="text-xl font-extrabold text-white"
          >
            Towhidul<span className="text-emerald-400">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button + Mobile Navigation */}
        <div className="navbar-end gap-2">
             <a
             href="/cv.pdf"
            download="Towhidul-Islam-Shahed-CV.pdf"
            className="btn btn-sm border-0 bg-emerald-400 px-4 font-semibold text-slate-950 shadow-md shadow-emerald-400/20 hover:bg-emerald-300"
  >
    Resume 
    {/* <span aria-hidden="true">↓</span> */}
  </a>
          <Link
            href="/#contact"
            className="btn btn-sm border-0 bg-emerald-400 text-slate-950 hover:bg-emerald-300"
          >
            Let&apos;s Talk
          </Link>

          {/* CSS-only mobile dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open navigation menu"
              className="btn btn-square btn-ghost text-xl text-white"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-60 rounded-box border border-white/10 bg-[#0b1728] p-3 text-slate-300 shadow-xl"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:bg-emerald-400/10 hover:text-emerald-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
