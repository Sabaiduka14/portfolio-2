import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

export default function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <Navbar />
      <Socials />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
