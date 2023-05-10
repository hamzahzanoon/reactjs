import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profile6 from '../../img/profile6.jpg';
import profile5 from '../../img/profile5.jpg';
import profile2 from '../../img/profile2.jpg';
import profile4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Testimonials = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  const clients = [
        {
            img: profile2,
            review: "I'm The engineer Hamza zanoun the front end developer and designer and I love js and React and HTML and CSS I am a developer and I can program anything and turn it into a beautiful website",
        },
        {
            img: profile5,
            review: "I'm The engineer Hamza zanoun the front end developer and designer and I love js and React and HTML and CSS I am a developer and I can program anything and turn it into a beautiful website",
        },
        {
            img: profile6,
            review: "I'm The engineer Hamza zanoun the front end developer and designer and I love js and React and HTML and CSS I am a developer and I can program anything and turn it into a beautiful website",
        },
        {
            img: profile4,
            review: "I'm The engineer Hamza zanoun the front end developer and designer and I love js and React and HTML and CSS I am a developer and I can program anything and turn it into a beautiful website",
        }
    ];

  return (
    <div className='t-wrapper' id='testimonials'>
     <div className='t-heading'>
       <span style={{color: darkMode? 'white' : ''}}>Clients always get  </span>
       <span>Exeptional Work  </span>
       <span style={{color: darkMode? 'white' : ''}}>From Me...</span>
       <div className='blur t-blurl' style={{background: "var(--purple)"}}></div> 
       <div className='blur t-blur2' style={{background: "skyblue"}}></div> 
    </div>
     <Swiper
     modules={[Pagination]}
     slidesPerView={1}
     pagination={{clickable:true}}
     >
      {clients.map((client, index) => {
        return (
            <SwiperSlide key={index}>
             <div className='testimonial'>
              <img src={client.img} alt='profile6' title='profile6' />
              <span style={{color: darkMode? 'white' : ''}}>{client.review}</span>
             </div>
            </SwiperSlide>
        )
      })}
     </Swiper>
    </div>
  )
};

export default Testimonials;