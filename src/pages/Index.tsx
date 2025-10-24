import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Proyects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Proyects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
export default Index;
