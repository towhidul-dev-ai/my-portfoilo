
const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "DaisyUI"],
  },
  {
    title: "Backend & Data",
    skills: ["REST APIs", "Node.js basics", "Authentication", "Database fundamentals"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vercel"],
  },
  {
    title: "AI & Computer Science",
    skills: ["Python basics", "Machine Learning fundamentals", "NLP", "Data Structures", "Algorithms"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-[#0a1525] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          What I work with
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Skills &amp; Technologies<span className="text-emerald-400">.</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#07111f] p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <p className="mt-6 text-sm text-slate-500">
          Keep only the technologies and skills you can confidently explain.
        </p> */}
      </div>
    </section>
  );
}
