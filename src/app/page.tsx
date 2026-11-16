import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
