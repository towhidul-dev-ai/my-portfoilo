
export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          My academic background
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Education<span className="text-emerald-400">.</span>
        </h2>

        <div className="mt-10 max-w-3xl border-l-2 border-emerald-400/40 pl-6">
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-[#07111f] bg-emerald-400" />

            <p className="text-sm text-emerald-300">
              Undergraduate Degree
            </p>

            <h3 className="mt-3 text-xl font-bold text-white">
              Bachelor&apos;s Degree in Computer Science and Technology
            </h3>

            <p className="mt-2 text-slate-300">
              Wuhan Institute of Technology, China
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Studied computer science fundamentals, programming, algorithms,
              data structures, databases, operating systems, and software
              development.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-[#07111f] p-4">
              <p className="font-semibold text-white">Undergraduate Thesis</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fake News Detection Using Natural Language Processing and
                Machine Learning.
              </p>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Add your exact graduation year and official degree title.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
