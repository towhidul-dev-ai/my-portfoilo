
export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Computer Science Graduate
          </p>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I&apos;m
            <span className="mt-2 block text-emerald-400">
              Towhidul Islam Shahed
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-slate-300 sm:text-2xl">
            Full-Stack Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            I build responsive web applications using React, Next.js,
            TypeScript, and modern web technologies. I&apos;m also interested
            in artificial intelligence, machine learning, and practical
            software solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn border-0 bg-emerald-400 px-6 text-slate-950 hover:bg-emerald-300"
            >
              Explore My Projects →
            </a>

            <a
              href="/cv.pdf"
              download
              className="btn border-white/20 bg-transparent px-6 text-white hover:border-emerald-400 hover:bg-emerald-400/10"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
            <a
              href="https://github.com/towhidul-dev-ai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-slate-900 p-5 shadow-2xl shadow-emerald-950/30">
            <div className="rounded-2xl border border-white/10 bg-[#07111f] p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-500">
                  developer.ts
                </span>
              </div>

              <div className="mt-8 space-y-4 font-mono text-sm leading-7">
                <p className="text-purple-300">const developer = {"{"}</p>
                <p className="pl-5 text-slate-300">
                  name: <span className="text-emerald-300">&quot;Towhidul&quot;</span>,
                </p>
                <p className="pl-5 text-slate-300">
                  role: <span className="text-emerald-300">&quot;Web Developer&quot;</span>,
                </p>
                <p className="pl-5 text-slate-300">
                  stack: <span className="text-emerald-300">&quot;Next.js + TypeScript&quot;</span>,
                </p>
                <p className="pl-5 text-slate-300">
                  learning: <span className="text-emerald-300">&quot;AI &amp; ML&quot;</span>
                </p>
                <p className="text-purple-300">{"}"}</p>
              </div>

              <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <p className="text-sm text-emerald-300">
                  Building useful things for the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
