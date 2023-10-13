import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMedium, FaPhone, FaWhatsapp } from 'react-icons/fa6';

export default class Footer extends React.Component{
  render(){
    return (
      <section id="footer" className="footer animate__animated animate__slower">
        <div className="social-Icon">
            <a rel="noreferrer" href="https://medium.com/@joshuataiwo07" target="_blank"><FaMedium /></a>
            <a rel="noreferrer" href="https://www.facebook.com/joshuataiwo07" target="_blank"><FaFacebook /></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/taiwo-joshua-olamilekan-02b42520a/" target="_blank"><FaLinkedin /></a>
            <a rel="noreferrer" href="mailto:joshuataiwo07@gmail.com" target="_blank"><FaEnvelope /></a>
            <a rel="noreferrer" href="https://www.instagram.com/taiwojoshua07/" target="_blank"><FaInstagram /></a>
            <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+2348103182378" target="_blank"><FaWhatsapp /></a>
            <a rel="noreferrer" href="tel:+2348103182378"><FaPhone /></a>
        </div>
      </section>
    );
  }
}