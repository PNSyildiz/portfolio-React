const HeroSection = ({ title }) => {
  return (
    <div>
    <div className="HeroSection">
      <div className="leftSide">
        <h1>{title}</h1>

        <h1 className="h1">WELCOME</h1>
        <h1 className="h1">I AM PASCOA SEKGOTA</h1>
        <p className="p">A Full-stack Developer Intern.</p>
        <p className="p">Creative, Innovative and, Inspired work.</p>
        <p className="p"></p>
        <p className="p"></p>
        <button className="btn">Contact Me</button>
        <button className="btn">Get Resume</button>
      </div>
      <div className="RightSide">
        <div className="topbar">
          <a className="home">HOME</a>
          <a>ABOUT</a>
          <a>PROJECTS</a>
        </div>
        <div className="Image">
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
