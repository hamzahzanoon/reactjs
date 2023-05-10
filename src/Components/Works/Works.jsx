import React from 'react';
import HA from '../../Components/HA.pdf';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import fiverr from '../../img/proxs-removebg-preview.png';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  return (
    <div className='Works'>
    <div className='container'>
     <div className='row'>
      <div className='col-lg-6 col-md-6 w-left'>
        <h2 style={{color: darkMode? 'white' : ''}}>Works for All these</h2>
        <h3>Brands & Clients</h3>
        <span style={{color: darkMode? 'white' : ''}}>I love HTML5 , CSS3 , JavaScript , REACT , JQUERY . I am a developer and Front End and I can program</span> <br />
        <button className='button i-button'><a href={HA} download> Hire Me </a></button>
      </div>
      <div className='col-lg-6 col-md-6 w-right'>
        <div className='w-mainCircle'>
         <div className='w-secCircle'>
          <img src={Upwork} alt='Upwork' title='Upwork' />
         </div>
         <div className='w-secCircle'>
          <img src={Shopify} alt='Shopify' title='Shopify' />
         </div>
         <div className='w-secCircle'>
          <img src={amazon} alt='amazon' title='amazon' />
         </div>
         <div className='w-secCircle'>
          <img src={Facebook} alt='Facebook' title='Facebook' />
         </div>
         <div className='w-secCircle'>
          <img src={fiverr} alt='fiverr' title='fiverr' />
         </div>
         <div className='w-backCircle yellowCircle'></div>
         <div className='w-backCircle blueCircle'></div>
        </div>
      </div>
     </div>
    </div>
   </div>
  )
};

export default Works;