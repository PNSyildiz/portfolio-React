import React from 'react'
import { SlSocialGithub } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GrFormViewHide } from "react-icons/gr";


const Projects = () => {
  return (
    <div id='projects'>
      <div className='ProjectSection'>
        <h1 className='title'>PROJECTS</h1>
      <div className='frames'>
        
        <div className="frame1">
       <h1>Explore My Work</h1>
       <p>View my github account for more projects <PiProjectorScreenChartLight/> </p>
       <button className='btnG'><SlSocialGithub /> Github</button>
       </div>
       <div className='projects'>
        <div className="frame4"><GrFormViewHide/></div>
       <div className="frame2"><GrFormViewHide/></div>
       <div className="frame3"><GrFormViewHide/></div>
       
       </div>
      </div> 
      </div>
    </div>
  )
}

export default Projects
