import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './icons8-brain-64.png';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
         <Tilt className='tilt br2 shadow-2' style={{width: '100px', height: '100px'}}>
      <div className='tilt-inner pa3' style={{width: '100px', height: '100px'}}>
        <img style={{paddingTop: '5px'}} alt='logo' src={brain} />
      </div>
    </Tilt>
       </div>
    )
};

export default Logo;