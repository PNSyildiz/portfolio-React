import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer"

function App() {
  
  return (
    <div className="Container">
     <HeroSection title='pns'/>
      <AboutMe/>
      <Projects/>
      <Footer title='PNS'/>
    </div> 
  );
}

export default App;
