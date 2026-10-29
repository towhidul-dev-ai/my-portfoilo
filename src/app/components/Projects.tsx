
// import Link from "next/link";
// import { projects } from "@/app/data/project";

// export default function Projects() {
//   return (
//     <section id="projects" className="scroll-mt-24 px-5 py-20 md:px-10">
//       <div className="mx-auto max-w-7xl">
//         <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
//           Selected work
//         </p>

//         <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
//           Featured Projects<span className="text-emerald-400">.</span>
//         </h2>

//         <p className="mt-4 max-w-2xl leading-7 text-slate-400">
//           A selection of web development projects demonstrating my work with
//           modern frameworks, APIs, and responsive interfaces.
//         </p>

//         <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <article
//               key={project.slug}
//               className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1525] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
//             >
//               <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-emerald-400/15 via-slate-900 to-[#07111f] p-6">
//                 <div className="text-center">
//                   <span className="text-sm font-semibold tracking-widest text-emerald-300">
//                     PROJECT {project.number}
//                   </span>
//                   <h3 className="mt-3 text-2xl font-black text-white">
//                     {project.name}
//                   </h3>
//                   <p className="mt-2 text-sm text-slate-400">
//                     {project.category}
//                   </p>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <p className="min-h-20 text-sm leading-7 text-slate-400">
//                   {project.description}
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.technologies.slice(0, 4).map((technology) => (
//                     <span
//                       key={technology}
//                       className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
//                     >
//                       {technology}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-6 flex flex-wrap items-center gap-4">
//                   <Link
//                     href={`/projects/${project.slug}`}
//                     className="font-semibold text-emerald-300 hover:text-emerald-200"
//                   >
//                     View Details →
//                   </Link>

//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-sm text-slate-400 hover:text-white"
//                     >
//                       Live Demo ↗
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/project";

const projectImages: Record<string, string> = {
  "bazar-dor": "/bajar.png",
  "bangla-news": "/bangla-news.png",
  fitlog: "/fitlog.png",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-5 py-20 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Selected Work
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of web development projects demonstrating my work with
          modern frameworks, APIs, and responsive interfaces.
        </p>

        {/* Project cards */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const imageSrc = projectImages[project.slug];

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1525] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Project image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-400/15 via-slate-900 to-[#07111f]">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`${project.name} project screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <span className="text-sm font-semibold tracking-widest text-emerald-300">
                        PROJECT {project.number}
                      </span>

                      <h3 className="mt-3 text-2xl font-black text-white">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {project.category}
                      </p>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30" />
                </div>

                {/* Project details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
                      {project.name}
                    </h3>

                    <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-xs text-emerald-300">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                     <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
                    >
                    View on GitHub
                     <span aria-hidden="true">↗</span>
                    </a>
                     <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
                    >
                      View Details
                      <span aria-hidden="true">→</span>
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        Live Demo
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}