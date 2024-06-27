import React from 'react'
import '../../components/sectionTwo/SectionTwo.css';
import admin from '../../images/Admin.png';
import bell from '../../images/bell.png';
import rect from '../../images/Rectangle 2.png';
import bg1 from '../../images/bg1.png';

const SectionTwo = () => {
  return (
    <div className='sectionTwo'>
        <div className='admin'>
            <div className='admin__img'>
                <img src={admin} alt="admin"/>
                <p>William  Jonson</p>
            </div>
            <div className='admin__bell'>
                <img src={bell} alt="bell"/>
            </div>
        </div>
        <div className='live'>
            <div className='live__dec'>
            <p id="p1">Live Game</p>
            <img src={rect} alt="rect"/>
            </div>
            <div className='live__imgs'>
                <div className='one'> 
                <img src={bg1} alt="bg1"/>
                <div className='one__desc'>
                    <p>Pubg War</p>
                    <span>war Battle</span>
                </div>

                </div>
                <div className='one'> 
                <img src={bg1} alt="bg1"/>
                <div className='one__desc'>
                    <p>Pubg War</p>
                    <span>war Battle</span>
                </div>

                </div>
                <div className='one'> 
                <img src={bg1} alt="bg1"/>
                <div className='one__desc'>
                    <p>Pubg War</p>
                    <span>war Battle</span>
                </div>

                </div>
                <div className='one'> 
                <img src={bg1} alt="bg1"/>
                <div className='one__desc'>
                    <p>Pubg War</p>
                    <span>war Battle</span>
                </div>

                </div>
                <div className='one'> 
                <img src={bg1} alt="bg1"/>
                <div className='one__desc'>
                    <p>Pubg War</p>
                    <span>war Battle</span>
                </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default SectionTwo