import React from 'react'
import { SlSocialGithub } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import '../CSS/Projects.css';

const github = () =>{
  window.location.href = 'https://github.com/PNSyildiz';
}
const Projects = () => {
  return (
    <div id='projects'>
      <div className='Project__Section'>
        <h1 className='project__title'>PROJECTS</h1>
      <div className='project__frames'>
        
        <div className="project__frame1">
       <h1>Explore My Work</h1>
       <p>View my github account for more <br/> projects<PiProjectorScreenChartLight/> </p>
       <button className='project__btnG rounded-full ' onClick={github}>
        <SlSocialGithub /> Github</button>
       </div>
       <div className='project__projects'>

        <div  rounded-lg> <iframe className="project__frame4"
        title="Example"
        // width="395"
        // height="415"
        src="https://pnsyildiz.github.io/Dronoticz/"
        allowFullScreen>
        </iframe></div>
       <div> <iframe className="project__frame2"
        title="Example"
        // width="560"
        // height="415"
        src="https://pnsyildiz.github.io/lifestyle/"
        allowFullScreen
      ></iframe></div>
       <div> <iframe  className="project__frame3"
        title="Example"
        // width="960"
        // height="315"
        src="https://pnsyildiz.github.io/Dronoticz/"
        allowFullScreen
      ></iframe></div>
       
       </div>
      </div> 
      </div>
    </div>
  )
}

export default Projects
