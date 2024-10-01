// React-portfolio Holly Edwards-Kiss 301249567 October 1st, 2024
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

//hero component
const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* Profile Image */}
        <div className="profile-image-container">
        <img src={profile_img} alt="" />
        </div>
        {/* Introduction */}
        <h1><span>I'm Holly Edwards-Kiss,</span> a Software Engineering Student.</h1>
        <p>Welcome to my Portfolio!</p>
        <p>My mission is to design and implement software solutions that address real-world challenges. As a student of software engineering, I strive to apply my technical knowledge to create practical, efficient, and user-friendly applications.</p>
        {/* Action Links */}
        <div className="hero-action">
            <div className="hero-about"><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></div>
            <div className="hero-resume">
              <a href="/Resume.pdf" target='_blank' rel='nonopener noreferrer'>
              My Resume</a> </div>
        </div>
    </div>
  )
}

export default Hero