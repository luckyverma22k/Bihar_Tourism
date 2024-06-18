import React from 'react'
import './About.css'
import about_img from '../../assets/about11.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>Welcome to Bihar Tourism</h3>
      <h2>Experience the Soul of India</h2>
        <p>
          Welcome to Bihar Tourism, where we invite you to explore the rich cultural heritage, historical landmarks, and natural beauty of Bihar. Our mission is to provide unforgettable experiences that showcase the diverse attractions of this vibrant state. From ancient monuments and serene landscapes to bustling cities and traditional villages, Bihar offers something for every traveler.
          Join us on a journey through history, culture, and nature, and create memories that will last a lifetime!
        </p>
    </div>
    </div>
  )
}

export default About
