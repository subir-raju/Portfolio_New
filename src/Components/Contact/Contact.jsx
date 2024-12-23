import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "71018170-7261-42d2-aa25-9c653190a60d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className="contact">
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
        <form onSubmit={onSubmit} className="contact-right">
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