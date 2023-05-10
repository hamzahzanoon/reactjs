import React from "react";
import Navbar from '../src/Components/Navbar/Navbar'
import Intro from '../src/Components/Intro/Intro';
import Services from '../src/Components/Services/Services';
import Experience from '../src/Components/Experience/Experience';
import Works from '../src/Components/Works/Works';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import Testimonials from '../src/Components/Testimonials/Testimonials';
import Content from '../src/Components/Content/Content';
import FloatingDiy from '../src/Components/FloatingDiy/FloatingDiy';
import Footer from '../src/Components/Footer/Footer';
import './App.css';
import {themeContext} from './Context';
import {useContext} from 'react';

function App() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode; 
  return (
    <div className="App"
     style={{background: darkMode? 'black': '',
     color: darkMode? 'white': ''}}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Content />
      <FloatingDiy />
      <Footer />
    </div>
  );
}

export default App;
