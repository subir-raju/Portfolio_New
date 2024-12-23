import React from 'react'
import './Hero.css'
import profile_img from '../../assets/propic.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import pdf from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt=" " />
      <h1>
        Hello, I'm<span> Subir</span>.
      </h1>
      <p>
        I am a masters student majoring in Data Science.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
         <a href={pdf}
          download={"resume.pdf"}>Resume </a>
        </div>
      </div>
    </div>
  );
}

export default Hero