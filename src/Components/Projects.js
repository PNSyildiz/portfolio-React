import React from 'react'
import { SlSocialGithub } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";


const Projects = () => {
  return (
    <div>
      <div className='ProjectSection'>
        <h1 className='title'>PROJECTS</h1>
      <div className='frames'>
        <h1>pnsYildiz</h1>
        <div className="frame1">
       <h1>Explore My Work</h1>
       <p>View my github account for more projects <PiProjectorScreenChartLight/> </p>
       <button className='btnG'><SlSocialGithub /> Github</button>
       </div>
       <div className='projects'>
       <div className="frame2">Projetc 2</div>
       <div className="frame3">Project 3</div>
       </div>
      </div> 
      </div>
    </div>
  )
}

export default Projects
