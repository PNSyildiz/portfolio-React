import React from 'react'
  import { TiSocialFacebook } from "react-icons/ti";
  import {  MdMarkEmailRead, MdOutgoingMail } from "react-icons/md";
  import { TiSocialTwitter } from "react-icons/ti";
  import { SlSocialGithub } from "react-icons/sl";
  import {  BsPhoneVibrateFill, BsSend } from "react-icons/bs";

  import { SlSocialLinkedin } from "react-icons/sl";



const contact = ({title}) => {
  return (
  <div>
  <h1 className='h11'>CONTACTS</h1>
    <div className='contact'>
      
      <div className='left-contact'> 
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

      <div className='right-contact'>
        <div className='designme'/>
        < h3>Send Me A Message <MdMarkEmailRead/></h3>
    <form>
    <label for="name"className="input" >Email</label><br/>
    <input type="text" name="email" className="input" required/><br/>
    <label for="name"className="input" >message:</label><br/>
   <textarea name="message" id="message" cols="30" rows="5" class="input-group__input" required></textarea>
<br/>
<br/>
<br/>
   <button type="submit" className='submit' >SEND<BsSend/></button>
  </form>
      </div>
    </div></div>
  )
}

export default contact
