import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaX } from 'react-icons/fa6';

export default function Footer(){
  return (
    <section id="footer" className="footer animate__animated animate__slower">
      <div className="social-Icon">
          {/* <a rel="noreferrer" href="https://medium.com/@joshuataiwo07" target="_blank"><FaMedium /></a> */}
          <a rel="noreferrer" href="https://www.facebook.com/joshuataiwo07" target="_blank"><FaFacebook /></a>
          <a rel="noreferrer" href="https://twitter.com/t__jay07?t=ja8QSHhFMcqDuKay2zQrnA&s=09" target="_blank"><FaX /></a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/taiwo-joshua-olamilekan-02b42520a/" target="_blank"><FaLinkedin /></a>
          <a rel="noreferrer" href="mailto:joshuataiwo07@gmail.com" target="_blank"><FaEnvelope /></a>
          <a rel="noreferrer" href="https://www.instagram.com/taiwojoshua07/" target="_blank"><FaInstagram /></a>
          <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+2348103182378" target="_blank"><FaWhatsapp /></a>
          <a rel="noreferrer" href="tel:+2348103182378"><FaPhone /></a>
      </div>
    </section>
  );
}