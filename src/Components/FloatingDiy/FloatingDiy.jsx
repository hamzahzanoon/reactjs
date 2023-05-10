import React from 'react';
import './FloatingDiy.css';

const FloatingDiy = ({imge , txt1 , txt2}) => {
  return (
    <div className='floatingDiy'>
     <img src={imge} alt='' title='' />
      <span>
       {txt1}
        <br />
       {txt2}
      </span>
    </div>
  )
};

export default FloatingDiy;