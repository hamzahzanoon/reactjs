import React from 'react';
import './Toggle.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

  return (
    <div className='toggle' onClick={handleClick}>
      <i class="fa-solid fa-sun"></i>
      <i class="fa-solid fa-moon"></i>
     <div className='t-button'
      style={darkMode? {left: '6px'} : {right: '5px'}}
      >
     </div>
    </div>
  )
};

export default Toggle;