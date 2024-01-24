import { FcSmartphoneTablet } from "react-icons/fc";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";
// import Contacts from "./Contacts";

    function scrollTosection(Contacts) {
    var section = document.getElementById(Contacts);
    section.style.display= 'block';
    }
  
const HeroSection = () => {
  return (
    <div>

      <div className="HeroSection">
        <div className="leftSide">
          <h1>PNS</h1>

          <h1 className="h1">WELCOME</h1>
          <h1 className="h1">I AM PASCOA SEKGOTA</h1>
          <p className="p">A Full-stack Developer Intern.</p>
          <p className="p">Creative, Innovative and, Inspired work.</p>
          <p className="p"></p>
          <p className="p"></p>
          <button onClick={scrollTosection} className="btn">
            <FcSmartphoneTablet /> Contact Me
          </button>
          <button className="btn">
            <ImDownload /> Get Resume
          </button>
        </div>
        <div className="RightSide">
          <div className="topbar">
            <Link to="/">HOME</Link>
            <a href="#aboutme">ABOUTME</a>
            <a href="#projects">PROJECTS</a>
          </div>
          <div className="Image"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
