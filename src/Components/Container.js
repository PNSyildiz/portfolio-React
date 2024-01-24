import React from 'react'
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Footer from "./Footer"

function Container() {
  return (
    <div>
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contacts />
        <Footer/>
    </div>
  )
}

export default Container
