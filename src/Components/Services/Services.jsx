// React-portfolio Holly Edwards-Kiss 301249567 October 1st, 2024
import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

//services component
const Services = () => {
  return (
    <div id='services' className='services'>
        {/* Title Section */}
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
         {/* Services List Section */}
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key ={index} className="services-format">
                    <h3>{service.s_no}</h3>         
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>            
                </div>
            })}
        </div>
    </div>
  )
}

export default Services