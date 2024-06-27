import React from 'react';
import './SectionOne.css';
import Hero from '../../components/hero/Hero.jsx';

const SectionOne = () => {
  return (
    <div className='sectionOne'>
      <nav className='navbar'>
        <div className='navbar__rectangle'>
          <button id="btn1">Game</button>
        </div>
        <div className='navbar__desc'>
          <ul>
            <li>
              <a href="#">Live score</a>
            </li>
            <li>
              <a href="#">Statistics</a>
            </li>
            <li>
              <a href="#">Analitics</a>
            </li>
            <li>
              <a href="#">Forecasts</a>
            </li>
          </ul>
        </div>
      </nav>
<Hero/>
    </div>
  );
};

export default SectionOne;
