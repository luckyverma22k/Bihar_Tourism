import React from 'react'
import './Programs.css'
import cultural_heritage_tour from '../../assets/cultural11.jpg'
import historical_tour from '../../assets/historical22.jpg'
import nature_wildlife_tour from '../../assets/nature11.jpg'
import historical_icon from '../../assets/historical-logo.png'
import cultural_heritage_icon from '../../assets/culture-logo.png'
import  nature_wildlife_icon from '../../assets/wildlife-logo.png'
const Programs = () => {
  return (
    <div className='programs '>
      <div className="program">
        <img src={historical_tour} alt="Historical Tour" />
        <div className="caption">
          <img src={historical_icon} alt="Historical Icon" className='imgg' />
          <p>Historical Tours</p>
        </div>
      </div>
      <div className="program">
        <img src={nature_wildlife_tour} alt="Nature and Wildlife Tour" />
        <div className="caption">
          <img src={nature_wildlife_icon} alt="Nature and Wildlife Icon" />
          <p>Nature and Wildlife Tours</p>
        </div>
      </div>
      <div className="program">
        <img src={cultural_heritage_tour} alt="Cultural and Heritage Tour" />
        <div className="caption">
          <img src={cultural_heritage_icon} alt="Cultural and Heritage Icon" />
          <p>Cultural and Heritage Tours</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
