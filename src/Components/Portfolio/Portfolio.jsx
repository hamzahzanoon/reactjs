import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import sidebar from '../../img/sidebar.png';
import musicapp from '../../img/musicapp.png';
import ecommerce from '../../img/ecommerce.png';
import hoc from '../../img/hoc.png';
import 'swiper/css';
import {themeContext} from '../../Context';
import {useContext} from 'react';


const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  return (
    <div className='portfolio' id="portflio">
      <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      breakpoints={{
         // when window width is >= 440px
        300: {
          width: 350,
          slidesPerView: 1,
        },
        // when window width is >= 500px
        500: {
          width: 500,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
    
       <SwiperSlide>
        <img src={sidebar} alt='sidebar' title='sidebar' />
       </SwiperSlide> 
       <SwiperSlide>
        <img src={musicapp} alt='musicapp' title='musicapp' />
       </SwiperSlide>
       <SwiperSlide>
        <img src={ecommerce} alt='ecommerce' title='ecommerce' />
       </SwiperSlide>
       <SwiperSlide>
        <img src={hoc} alt='hoc' title='hoc' />
       </SwiperSlide>
       <SwiperSlide>
        <img src={sidebar} alt='sidebar' title='sidebar' />
       </SwiperSlide> 
       <SwiperSlide>
        <img src={musicapp} alt='musicapp' title='musicapp' />
       </SwiperSlide>
       <SwiperSlide>
        <img src={ecommerce} alt='ecommerce' title='ecommerce' />
       </SwiperSlide>
       <SwiperSlide>
        <img src={hoc} alt='hoc' title='hoc' />
       </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default Portfolio;