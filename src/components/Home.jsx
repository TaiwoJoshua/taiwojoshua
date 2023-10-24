import React from 'react';

export default class Home extends React.Component{
  render(){
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
  
    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';
  
      var that = this;
      var delta = 200 - Math.random() * 100;
  
      if (this.isDeleting) { delta /= 2; }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
      setTimeout(function() {
        that.tick();
      }, delta);
    };
  
    window.onload = function() {
      // var elements = document.getElementsByClassName('typewrite');
      // for (var n=0; n<elements.length; n++) {
      //     var toRotate = elements[n].getAttribute('data-type');
      //     var period = elements[n].getAttribute('data-period');
      //     if (toRotate) {
      //       new TxtType(elements[n], JSON.parse(toRotate), period);
      //     }
      // }
      
      const typedTextSpan = document.querySelector(".typewrite");
      const cursorSpan = document.querySelector(".cursor");
      
      const textArray = ["A Website Designer", "A Website Developer"];
      const typingDelay = 200;
      const erasingDelay = 100;
      const newTextDelay = 2000;
      let textArrayIndex = 0;
      let charIndex = 0;
      
      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } 
        else {
          cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay);
        }
      }
      
      function erase() {
        if (charIndex > 0) {
          if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        } 
        else {
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if(textArrayIndex>=textArray.length) textArrayIndex=0;
          setTimeout(type, typingDelay + 1100);
        }
      }
      
      if(textArray.length) setTimeout(type, newTextDelay + 250);
    };



    return (
      <section id="home">
        <div>
            <div className="main">
                <div>
                    <h1 className="headings">I AM <br /> TAIWO JOSHUA</h1>
                    <h2 className="full">
                        {/* <span className="typewrite" data-period="2000" data-type='["A Website Designer", "A Website Developer"]'>
                            <span className="wrap"></span>
                        </span>                         */}
                        <span className='typewrite'></span><span className="cursor"></span>
                    </h2><br />
                </div>
                <a href="#contact">
                    <button className="btn">
                        Hire Me
                    </button>
                </a>  
            </div>
        </div>
      </section>
    );
  }
}