import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"; 
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      
      <SocialLinks />
    </div>
  );
}

export default App;
