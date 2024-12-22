import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch with me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently looking for new opportunities and want to explore new
            technologies. Feel free to reach out to me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt=" " />
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt=" " />
            </div>
            <div className="contact-detail">
              <img src={github} alt=" " />
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="10" placeholder="Write your message" />
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact