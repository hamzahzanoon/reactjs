import React, { useContext } from 'react';
import './Intro.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import glassesimoji from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import FloatingDiy from '../FloatingDiy/FloatingDiy';
import {themeContext} from '../../Context';


const Intro = () => {


   const transition = {duration: 2, type: 'spring'};

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode; 

  return (
    <div className='intro'>
     <div className='container'>
      <div className='row'>
       <div className='col-lg-6 col-md-6 i-left'>
        <div className='i-name'>
         <h3 style={{color: darkMode? 'white' : ''}}>Hi! I Am</h3> 
         <h4>Hamzah zanoon</h4>
         <span style={{color: darkMode? 'white' : ''}}>Hello! I'm The engineer Hamza zanoun, the front end developer and designer behind all of your company's web projects</span>
        </div>
          <button  className='button i-button'>Hire me</button>
           
          <div className='i-icons'>
            <img src={linkedin} alt='linkedin' title='linkedin' />
            <img src={github} alt='github' title='github' />
            <img src={instagram} alt='instagram' title='instagram' />
          </div>
         
        </div>
       <div className='col-lg-6 col-md-6 i-right'>
          <div className='img-top'>
          <img src={glassesimoji} alt='glassesimoji' title='glassesimoji' />
          </div>
          <div className='img-right'>
            <img src={crown} alt='crown' title='crown' />
            <span>Front End</span>
          </div>
          <div className='img-botton'>
            <img src={thumbup} alt='thumbup' title='thumbup' />
            <span>Web Developer</span>
         </div>
         <div className='img-center'>
           <img src={boy} alt='boy' title='boy' />
           <img src={Vector1} alt='Vector1' title='Vector1' />
           <img src={Vector2} alt='Vector2' title='Vector2' />
         </div>
       </div>
      </div>
     </div>
    </div>
  )
};

export default Intro;