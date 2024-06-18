import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container' >
      <div className="hero-text">
      <h1>Discover the Heart of India: Bihar Awaits You</h1>
        <p>Experience the rich culture, breathtaking landscapes, and historical marvels of Bihar. From ancient temples to serene riverbanks, let us guide you through an unforgettable journey.</p>
        <a href="https://tourism.bihar.gov.in/" target="_blank" rel="noopener noreferrer" className='btn'>
          Explore More <img src={dark_arrow} alt="arrow icon" />
        </a>
      </div>
      
    </div>
  )
}

export default Hero
