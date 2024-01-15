import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

function App() {
  
  return (
    <div className="Container">
     <HeroSection title='pns'/>
      <AboutMe/>
      <Projects/>
    </div> 
  );
}

export default App;
