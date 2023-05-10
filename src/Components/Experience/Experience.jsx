import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className='experience' id='experience'>
     <div className='conatiner'>
      <div className='row'>
       <div className='col-lg-4 col-md-4 rate'>
        <h5>8+</h5>
        <div className='e-rate'>
         <span>years</span> <br />
         <span>Exprerience</span>
        </div>
       </div>
       <div className='col-lg-4 col-md-4 rate'>
       <h5>20+</h5>
       <div className='e-rate'>
        <span>Completed</span> <br />
        <span>Projects</span>
       </div>
      </div>
      <div className='col-lg-4 col-md-4 rate'>
      <h5>5+</h5>
      <div className='e-rate'>
       <span>Companies</span> <br />
       <span>Work</span>
      </div>
     </div>
      </div>
     </div>
    </div>
  )
};

export default Experience;