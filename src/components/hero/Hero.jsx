import React from 'react'
import './Hero.css';
import banner from '../../images/banner.png';


const Hero = () => {
  return (
    <div className='banner'>
      <div className='banner__back'>
    <img src={banner} alt=" banner"/>
      </div>
      <div className='banner__title'>
        <h1>The Forbidden Kingdom <br></br>Adventure War</h1>
        <button id="btn2">More Details</button>
      </div>
    </div>
  )
}

export default Hero