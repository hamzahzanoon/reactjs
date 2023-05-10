import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

const faBars = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

const Navbar = () => {
  
  // faBars.addEventListener("click", () => {
  //     navLinks.classList.toggle("show");
  // })
  return (
    <nav className="navbar">
        <div className="nav-links">
        <ul>
        <div className='logo'>SOCIAL</div>
      
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
         <li>Home</li>
        </Link>
        <Link spy={true} to="services" smooth={true}>
         <li>Services</li>
        </Link>
        <Link spy={true} to="experience" smooth={true}>
         <li>Experience</li>
        </Link>
        <Link spy={true} to="portflio" smooth={true}>
         <li>Portflio</li>
        </Link>
        <Link spy={true} to="testimonials" smooth={true}>
         <li>Testimonials</li>
        </Link>
        </ul>
        </div>
        <Toggle />   
     
                <li><a href="#" className="botton-btn button">Contact</a></li>
       
       <button>
         <i className="fa-solid fa-bars"></i>
         <i class="fa-solid fa-xmark"></i>
       </button>
    </nav>
  )
};

export default Navbar;



