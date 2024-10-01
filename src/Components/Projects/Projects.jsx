// React-portfolio Holly Edwards-Kiss 301249567 October 1st, 2024
import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

//projects component
const Projects = () => {
    return (
      <div id='projects' className='myprojects'>
        <div className="myprojects-title">
          <h1>My Projects</h1>
          <img src={theme_pattern} alt="" />
        </div>
        {/* Projects Container */}
        <div className="myprojects-container">
          {mywork_data.map((work, index) => {
            return (
              <div key={index} className="project-item">
                <img src={work.w_img} alt={work.w_name} />
                <h2>{work.w_name}</h2>
                <p>{work.w_description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Projects;
  