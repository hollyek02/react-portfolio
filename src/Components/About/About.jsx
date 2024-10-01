// React-portfolio Holly Edwards-Kiss 301249567 October 1st, 2024
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

//about component
const About = () => {
  return (
    <div id='about' className='about'>
        {/* About Title */}
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        {/* About Sections */}
        <div className="about-sections">
           <div className="about-left">
               <img src={profile_img} alt="" />
            </div> 
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Holly Edwards-Kiss, a Software Engineering Technology student at Centennial College. I have a passion for creating innovative, efficient, and user-friendly software solutions. My studies have equipped me with strong technical skills in web development, coding, and software design, and I’m eager to apply my knowledge in real-world scenarios.</p>
                    <p>I’m always looking for new opportunities to learn and grow in the field of software engineering, while building impactful projects that solve real-world problems.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About