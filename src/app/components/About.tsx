
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Get to know me
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          About Me<span className="text-emerald-400">.</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-9">
            <h3 className="text-xl font-semibold text-white">
              Turning ideas into web experiences
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              I am a Computer Science and Technology graduate from Wuhan
              Institute of Technology. My interests include frontend and
              full-stack development, software engineering, and AI-related
              applications.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I enjoy learning new technologies and applying them to practical
              projects. I have worked with React, Next.js, TypeScript,
              REST APIs, and authentication workflows.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My undergraduate thesis explored fake news detection using
              natural language processing and machine learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {[
              {
                title: "Web Development",
                description: "Responsive interfaces and full-stack applications.",
              },
              {
                title: "Problem Solving",
                description: "Breaking features into manageable tasks.",
              },
              {
                title: "AI & Machine Learning",
                description: "An academic interest in NLP and intelligent systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0b1728] p-6"
              >
                <h3 className="font-semibold text-emerald-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
