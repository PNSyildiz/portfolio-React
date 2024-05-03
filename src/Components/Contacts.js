import React from 'react'
  import { TiSocialFacebook } from "react-icons/ti";
  import {  MdMarkEmailRead, MdOutgoingMail } from "react-icons/md";
  import { TiSocialTwitter } from "react-icons/ti";
  import { SlSocialGithub } from "react-icons/sl";
  import {  BsPhoneVibrateFill, BsSend } from "react-icons/bs";

  import { SlSocialLinkedin } from "react-icons/sl";
  import '../CSS/Contacts.css';

  
const contact = () => {
  return (
  <div>
  <h1 id="contact" className='h11'>CONTACTS</h1>
    <div className='container__contact'>
      
      <div className='left__contact'> 
         <div className='contact__designme'/>
        <h6><MdOutgoingMail />   Pascoasekgota27@gmail.com</h6>
        <h5><BsPhoneVibrateFill />   (+27)0798400532</h5>
      <div className='contact__icons'>
      <TiSocialFacebook className='contact__icon' />
        <TiSocialTwitter className='contact__icon'/>
        <SlSocialLinkedin  className='contact__icon'/>
        <SlSocialGithub  className='contact__icon'/>
      </div>
      <h1 className='contact__lowpns'>PNS</h1>
      <div className='contact__designme1'/>
      </div>

      <div className='right__contact'>
        <div className='contact__designme'/>
        < h3>Send Me A Message <MdMarkEmailRead/></h3>
        <form className='contact__form' action="https://formsubmit.co/pascoasekgota27@gmail.com" method="POST">
    <label for="name"className="contact__input" >Email :</label><br/>
    <input type="text" name="email" className="contact__input" required id='name'/><br/>
    <label for="name"className="contact__input" >Subject :</label><br/>
    <input type="text" name="email" className="contact__input" required id='subject'/><br/>
    <label for="name"className="contact__input" >Message:</label><br/>
   <textarea name="message" id="message" cols="30" rows="5" class="group__input" required></textarea>
<br/>
<br/>
<br/>
   <button type="submit" className='contact__submit' >SEND<BsSend/></button>
  </form>
      </div>
    </div>
      {/* <div>
  <script src="https://smtpjs.com/v3/smtp.js" ></script>
  <script src='script.js'></script>
</div> */}
</div>
    
  );

}

export default contact
