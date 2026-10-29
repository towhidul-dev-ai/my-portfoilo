
// import type { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { projects } from "@/app/data/project";

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// export function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const project = projects.find((item) => item.slug === slug);

//   return {
//     title: project
//       ? `${project.name} | Towhidul Islam Shahed`
//       : "Project Not Found",
//     description: project?.description ?? "Portfolio project details.",
//   };
// }

// export default async function ProjectDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const project = projects.find((item) => item.slug === slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-[#07111f] px-5 py-12 text-slate-100 md:px-10 md:py-16">
//       <article className="mx-auto max-w-5xl">
//         <Link
//           href="/#projects"
//           className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
//         >
//           ← Back to all projects
//         </Link>

//         <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-slate-900 p-7 sm:p-12">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
//             Project {project.number} · {project.category}
//           </p>

//           <h1 className="mt-5 text-4xl font-black sm:text-6xl">
//             {project.name}
//           </h1>

//           <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
//             {project.longDescription}
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn border-0 bg-emerald-400 text-slate-950 hover:bg-emerald-300"
//               >
//                 Live Demo ↗
//               </a>
//             )}

//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn border-white/20 bg-transparent text-white hover:border-emerald-400 hover:bg-emerald-400/10"
//               >
//                 GitHub Repository ↗
//               </a>
//             )}
//           </div>

//           {!project.liveUrl && !project.githubUrl && (
//             <p className="mt-6 text-sm text-slate-500">
//               Project links will be added here when available.
//             </p>
//           )}
//         </div>

//         <section className="mt-7 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
//           <h2 className="text-2xl font-bold">Technology Stack</h2>

//           <div className="mt-5 flex flex-wrap gap-3">
//             {project.technologies.map((technology) => (
//               <span
//                 key={technology}
//                 className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-sm text-emerald-300"
//               >
//                 {technology}
//               </span>
//             ))}
//           </div>
//         </section>

//         <div className="mt-7 grid gap-7 md:grid-cols-2">
//           <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
//             <h2 className="text-xl font-bold">Challenges Faced</h2>

//             <ul className="mt-5 space-y-4">
//               {project.challenges.map((challenge) => (
//                 <li key={challenge} className="flex gap-3 text-sm leading-6 text-slate-400">
//                   <span className="text-emerald-400">▹</span>
//                   {challenge}
//                 </li>
//               ))}
//             </ul>
//           </section>

//           <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
//             <h2 className="text-xl font-bold">Future Improvements</h2>

//             <ul className="mt-5 space-y-4">
//               {project.improvements.map((improvement) => (
//                 <li key={improvement} className="flex gap-3 text-sm leading-6 text-slate-400">
//                   <span className="text-emerald-400">▹</span>
//                   {improvement}
//                 </li>
//               ))}
//             </ul>
//           </section>
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             href="/#projects"
//             className="btn border-white/15 bg-transparent text-white hover:border-emerald-400 hover:bg-emerald-400/10"
//           >
//             Explore More Projects
//           </Link>
//         </div>
//       </article>
//     </main>
//   );
// }


import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/project";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.name} | Towhidul Islam Shahed`
      : "Project Not Found",
    description: project?.description ?? "Portfolio project details.",
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#07111f] text-emerald-300">
          Loading project...
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-12 text-slate-100 md:px-10 md:py-16">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
        >
          ← Back to all projects
        </Link>

        <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-slate-900 p-7 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Project {project.number} · {project.category}
          </p>

          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            {project.name}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0 bg-emerald-400 text-slate-950 hover:bg-emerald-300"
              >
                Live Demo ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-white/20 bg-transparent text-white hover:border-emerald-400 hover:bg-emerald-400/10"
              >
                GitHub Repository ↗
              </a>
            )}
          </div>

          {!project.liveUrl && !project.githubUrl && (
            <p className="mt-6 text-sm text-slate-500">
              Project links will be added here when available.
            </p>
          )}
        </div>

        <section className="mt-7 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Technology Stack</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-sm text-emerald-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold">Challenges Faced</h2>

            <ul className="mt-5 space-y-4">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 text-sm leading-6 text-slate-400"
                >
                  <span className="text-emerald-400">▹</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold">Future Improvements</h2>

            <ul className="mt-5 space-y-4">
              {project.improvements.map((improvement) => (
                <li
                  key={improvement}
                  className="flex gap-3 text-sm leading-6 text-slate-400"
                >
                  <span className="text-emerald-400">▹</span>
                  {improvement}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#projects"
            className="btn border-white/15 bg-transparent text-white hover:border-emerald-400 hover:bg-emerald-400/10"
          >
            Explore More Projects
          </Link>
        </div>
      </article>
    </main>
  );
}
