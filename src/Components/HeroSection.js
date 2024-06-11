import { FcSmartphoneTablet } from "react-icons/fc";
import { ImDownload} from "react-icons/im";
import cv from "../Assets/blue-light background.jpg";
import "../CSS/HeroSection.css";


function scrollTosection(Contacts) {
  var section = document.getElementById(Contacts);
  section.style.display = "block";
}

const downloadDocument = () => {
  // Create an anchor element
  const link = document.createElement("a");
  link.href = cv;
  link.download = cv;

  // append the anchor to the body
  document.body.appendChild(link);

  // trigger the download
  link.click();

  // cleanup
  document.body.removeChild(link);
};

const HeroSection = () => {
  return (
    <div id="home">
      <div className="hero__section">
        <div className="hero__div-left">
         <div className="hero__top">
         <p className="hero__logo">PNS</p>

<div className="hero__navbar">
<ul className="hero__menu">
<li><a href="#home">Home</a></li>
<li><a href="#aboutme">About</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contacts">contacts</a></li>
</ul>
</div>
         </div>

        <center>  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WELCOME.
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            I AM PASCOA SEKGOTA
          </h1></center>
          <br/>
          <br/>
          <p>A Full-stack Developer Intern.
           <br/>Creative, Innovative and, Inspired work.</p>
          
          <div className="hero__buttons">
            <button
              onClick={scrollTosection}
              className="hero__btn text-Black font-bold py-2 px-7 "
            >
              <FcSmartphoneTablet /> Contact Me
            </button>
            <button
              className="hero__btn text-Black font-bold py-2 px-7 "
              onClick={downloadDocument}
            >
              <ImDownload /> Get Resume{" "}
            </button>
          </div>
        </div>
        <div className="hero__div-right">
  
          <div className="hero__image"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
