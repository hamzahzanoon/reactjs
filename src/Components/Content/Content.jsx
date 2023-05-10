import React from 'react';
import './Content.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mw6xtil', 'template_fs12x7k', form.current, 'VLwglltOWvnCYAiK')
      .then((result) => {
          console.log(result.text);
          // setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='content'>
     <div className='container'>
      <div className='row'>
       <div className='col-lg-6 col-md-6 c-left'>
        <span>Get in touch</span> <br />
        <span>Contact Me</span> 
       </div>
       <div className='col-lg-6 col-md-6 c-right'>
        <div className='c-center'>
         <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user-name' className='user' placeholder='Name' />
          <input type='email' name='user-email' className='user' placeholder='Email' />
          <textarea type='text' name='message' className='user' placeholder='Message'></textarea>
          <input type='submit' value='Send' className='button c-button' />
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
};

export default Content;