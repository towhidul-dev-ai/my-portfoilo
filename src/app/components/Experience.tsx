
const experienceItems = [
  {
    role: "Personal Projects",
    type: "Independent Web Development",
    period: "Project-based learning",
    description:
      "Developed web applications to practice modern frontend development, API integration, authentication, and responsive UI design.",
    points: [
      "Built interfaces with React and Next.js.",
      "Used TypeScript and reusable components to organize code.",
      "Integrated APIs to retrieve and display application data.",
      "Practiced version control and project deployment workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#0a1525] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          My development journey
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Experience<span className="text-emerald-400">.</span>
        </h2>

        <div className="mt-10 max-w-4xl space-y-6">
          {experienceItems.map((item) => (
            <article
              key={item.role}
              className="rounded-2xl border border-white/10 bg-[#07111f] p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-emerald-300">{item.type}</p>
                </div>

                <span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
