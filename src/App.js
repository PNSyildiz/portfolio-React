import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts"
import Footer from "./Components/Footer";

function App() {
  
  return (
    <div className="Container">
     <HeroSection title='pns'/>
      <AboutMe/>
      <Projects/>
      <Contacts title='PNS'/>
      <Footer/>
    </div> 
  );
}

export default App;
