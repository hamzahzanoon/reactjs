import React from 'react';
import './Footer.css';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Footer = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 

  return (
    <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                            <h3 style={{color: darkMode? 'white' : ''}} className="f-title f_600 t_color f_size_18">SOCIAL</h3>
                            <p style={{color: darkMode? 'white' : ''}}>Welcome. We have earned a solid reputation for what we do. Let us take your website to a new dimension of success and distinction!</p>
                            <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                <button style={{color: darkMode? 'white' : ''}} className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                <p style={{color: darkMode? 'white' : ''}} className="mchimp-errmessage"></p>
                                <p style={{color: darkMode? 'white' : ''}} className="mchimp-sucmessage"></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                            <h3 style={{color: darkMode? 'white' : ''}} className="f-title f_600 t_color f_size_18">My Pages</h3>
                            <ul className="list-unstyled f_list">
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Home</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Services</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Experience</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Portflio</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                            <h3 style={{color: darkMode? 'white' : ''}} className="f-title f_600 t_color f_size_18">Help</h3>
                            <ul className="list-unstyled f_list">
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">FAQ</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Term &amp; conditions</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Reporting</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Documentation</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Support Policy</a></li>
                                <li><a style={{color: darkMode? 'white' : ''}} href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                            <h3 style={{color: darkMode? 'white' : ''}} className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                            <div className="f_social_icon">
                                <a style={{color: darkMode? 'white' : ''}} href="#" className="fab fa-facebook"></a>
                                <a style={{color: darkMode? 'white' : ''}} href="#" className="fab fa-twitter"></a>
                                <a style={{color: darkMode? 'white' : ''}} href="#" className="fab fa-linkedin"></a>
                                <a style={{color: darkMode? 'white' : ''}} href="#" className="fab fa-pinterest"></a>
                            </div>
                            <div className="f_social_icon social_icon">
                                <i className="fa-solid fa-envelope"></i> <p style={{color: darkMode? 'white' : ''}}>aa6hamzah6aa@gmail.com</p>
                            </div>
                            <div className="f_social_icon social_icon">
                                <i className="fa-solid fa-phone"></i><p style={{color: darkMode? 'white' : ''}}>+970 5955 83131</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bg">
                <div className="footer_bg_one"></div>
                <div className="footer_bg_two"></div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-7">
                        <p style={{color: darkMode? 'white' : ''}} className="mb-0 f_400">© cakecounter Inc.. 2023 All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 col-sm-5 text-right">
                        <p style={{color: darkMode? 'white' : ''}}>Made with <i className="icon_heart"></i> in <a style={{color: darkMode? 'white' : ''}} href="https://t.me/HA112200AH" target="_blank">Hamzah zanoon</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footer;