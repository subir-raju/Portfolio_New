import React from 'react'
import './Hero.css'
import profile_img from '../../assets/propic.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt=" " />
      <h1>
        <span>I'm Subir Dey,</span> frontend developer based in Finland
      </h1>
      <p>
        I am a frontend developer from Tampere, Finland with 4 years of
        Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect with me
                  </AnchorLink></div>
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  );
}

export default Hero