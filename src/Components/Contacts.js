import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { MdMarkEmailRead, MdOutgoingMail } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { BsPhoneVibrateFill, BsSend } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import "../CSS/Contacts.css";
import "tailwindcss/tailwind.css"; // Include Tailwind CSS

const contact = () => {
  return (
    <div className="container mx-auto px-1">
      <h1 id="contact" className="title_h11">
        CONTACTS
      </h1>

      <div className="flex">
        <div className="Contacts">
          <div className="contact__designme1" />
          

          <div className="number"> <MdOutgoingMail />
          <h5>
            Pascoasekgota27@gmail.com
          </h5>
          </div>

          <div className="number"> <BsPhoneVibrateFill />
          <h5>(+27)0798400532 </h5>
          </div>

          <div className="contact__icons">
            <TiSocialFacebook className="contact__icon" />
            <TiSocialTwitter className="contact__icon" />
            <SlSocialLinkedin className="contact__icon" />
            <SlSocialGithub className="contact__icon" />
          </div>
          <h1 className="contact__lowpns">PNS</h1>
          <div className="contact__designme" />
        </div>

        <div className="right__contact">
          {/* <div className="contact__designme1" /> */}

          <div className="SM">
            <h3 > Send Me A Message</h3>
            <MdMarkEmailRead />
            </div>

          <form
            className="contact__form"
            action="https://formsubmit.co/pascoasekgota27@gmail.com"
            method="POST"
          >
            <label htmlFor="name" className="contact__label">
              Email :
            </label>
            <br />
            <input
              type="text"
              name="email"
              className="contact__input"
              required
              id="name"
            />
            <br />
            <label htmlFor="subject" className="contact__label">
              Subject :
            </label>
            <br />
            <input
              type="text"
              name="subject"
              className="contact__input"
              required
              id="subject"
            />
            <br />
            <label htmlFor="message" className="contact__label">
              Message:
            </label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="group__input"
              required
            ></textarea>
            <br />
            <br />
            <br />
            <button className="contact__submit">
              SEND
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
