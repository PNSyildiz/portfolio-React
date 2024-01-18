import React from 'react'
  import { TiSocialFacebook } from "react-icons/ti";
  import { MdOutgoingMail } from "react-icons/md";
  import { TiSocialTwitter } from "react-icons/ti";
  import { SlSocialGithub } from "react-icons/sl";
  import { BsPhoneVibrateFill } from "react-icons/bs";

  import { SlSocialLinkedin } from "react-icons/sl";



const Footer = ({title}) => {
  return (
    <div className='footer'>
      <div className='left-footer'> 
         <div className='designme'/>
        <h6><MdOutgoingMail />   Pascoasekgota27@gmail.com</h6>
        <h5><BsPhoneVibrateFill />   (+27)0798400532</h5>
      <div className='icons'>
      <TiSocialFacebook className='icon' />
        <TiSocialTwitter className='icon'/>
        <SlSocialLinkedin  className='icon'/>
        <SlSocialGithub  className='icon'/>
      </div>
      <h1>{title}</h1>
      <div className='designme1'/>
      </div>

      <div className='right-footer'>
        
      </div>
    </div>
  )
}

export default Footer
