import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./Components/Container";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </Router>
  );

  // return (
  //   <div className="Container">
  //    <HeroSection title='pns'/>
  //     <AboutMe/>
  //     <Projects/>
  //     <Contacts title='PNS'/>
  //     <Footer/>
  //     <Router>
  //     {/* <Switch> */}<Routes >
  //       <Route path="/" Component={HeroSection.js} />
  //       <Route path="/AboutMe" Component={AboutMe.js} />
  //     {/* </Switch> */}</Routes>
  //     </Router>
  //   </div>
  // );
}

export default App;
