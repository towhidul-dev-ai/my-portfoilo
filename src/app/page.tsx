
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


export default function HomePage() {
  return (
    <>


      <main className="min-h-screen bg-[#07111f] text-slate-100">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

    </>
  );
}
