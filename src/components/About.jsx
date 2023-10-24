import React from 'react';
import image from '../images/photo_2022-03-28_15-31-27.jpg';

export default class About extends React.Component{
  render(){
    return (
      <section id="about" className="animate__animated animate__slower">
        <h1 className="headings">ABOUT ME</h1>
        <div id="pic">
            <img src={image} alt="Taiwo Joshua" />
            <div id="intro">
                <h2>
                    TAIWO JOSHUA
                </h2>
                <p>
                I am a young, diligent, and aspiring web designer. Currently, I am a student at <a href="https://run.edu.ng/" target="_blank" rel="noopener noreferrer">Redeemer's University</a>, studying for a Bachelor of Engineering (B.Eng) degree in Computer Engineering. Proficient in HTML, CSS, Bootstrap, JavaScript, JQuery, React JS, PHP, and MySQL, I have a wide range of skills necessary for web design.<br /><br />
                My journey in web design began at <a href="http://www.dotsitech.edu.ng/" target="_blank" rel="noopener noreferrer">DOTS ICT INSTITUTE OF TECHNOLOGY</a>, where I acquired valuable knowledge and experience in the field. During my time there, I learned extensively about web design, and you can read more about my experiences on <a href="https://medium.com/@joshuataiwo07/my-experience-so-far-in-dots-ict-aa4fb8cda07f" target="_blank" rel="noopener noreferrer">Medium</a>.<br /><br />
                Since my time at DOTS, I have continued to hone my web design skills and further develop my expertise. I now have {new Date().getFullYear() - 2020} years of experience in the web design industry. If you visit my <a href="https://github.com/TaiwoJoshua" target="_blank" rel="noopener noreferrer">GitHub</a> page, you can see some of the many projects I have built, showcasing my capabilities in web design. Additionally, please check out my portfolio section below for further examples of my work.
                </p>
            </div>
        </div>
      </section>
    );
  }
}