import React from 'react';
import './Services.css';
import glasses from '../../img/glasses.png';
import heartemoji from '../../img/heartemoji.png';
import humble from '../../img/humble.png';
import HA from '../../Components/HA.pdf';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Services = () => {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode; 
   
  return (
    <div className='services' id='services'>
     <div className='container'>
      <div className='row'>
       <div className='col-lg-4 col-md-4 s-left'>
         <h2 style={{color: darkMode? 'white' : ''}}> My Awesome </h2>
         <h3> Services </h3>
         <span style={{color: darkMode? 'white' : ''}}>I love js and React and HTML and CSS. I am a developer and I can program</span> <br />
         <button className='button i-button'><a href={HA} download> DownloadCv </a></button>
       </div>
       <div className='col-lg-4 col-md-4 s-right'>
         <div className='img-top s-center'>
          <img src={glasses} alt='glasses' title='glasses' />
          <h4> Developer </h4>
          <span>HTML5 , CSS3 , JavaScript , React , jquery</span> <br />
          <button>Learn more</button>
         </div>
       </div>
       <div className='col-lg-4 col-md-4 s-right'>
         <div className='img-top s-img-top'>
           <img src={heartemoji} alt='heartemoji' title='heartemoji' />
           <h4> Design </h4>
           <span>Figma , Sketch , Photoshop , Adobe , Adob xd</span> <br />
           <button>Learn more</button>
          </div>
         <div className='img-top img-botton'>
           <img src={humble} alt='humble' title='humble' />
           <h4> UI/UX </h4>
           <span> UX designer , UI designer , lnteraction designer , Charts the user pathway</span> <br />
           <button>Learn more</button>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
};

export default Services;