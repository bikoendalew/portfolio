import Banner from "./components/Banner";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Project";
import Skills from "./components/sections/Skills";


export default function Home() {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Hero />
   
      <About />
      <Banner dataAdSlot="3023382069" dataAdFormat="auto" dataFullWidthResponsive={false}/>
      <Projects />
      <Skills />
      <Banner dataAdSlot="5775260807" dataAdFormat="auto" dataFullWidthResponsive={false}/>
      <Contact />
    </div>
  );
}