import React from 'react';
import { LiaTimesCircle } from 'react-icons/lia';
import { FaSpinner } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default class Contact extends React.Component{
  state = {
    formData: {name: "", email: "", message: ""},
    status: {status: "", type: "", message: ""},
    sending: false
  };
  
  handleChange = (event) => {
      const { name, value } = event.target;
      this.setState(oldState => {
          return {formData: {...oldState.formData, [name]: value}};
      });
  };

  sendMail = async (name, email, message) => {
    try {
        const send = await emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, { name, email, message}, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
        if(send.status === 200){
            return true;
        }
    } catch (error) {
        return error;
    }
  }
  
  sendmail = (e) => {
      e.preventDefault();
      this.setState(() => {
        return {sending: true}
      });
      this.sendMail(this.state.formData.name, this.state.formData.email, this.state.formData.message)
      .then(send => {
          if(!send){
              this.setState(() => {
                return {status: {status: "failed", type: "failed", message: "Message not Sent"}}
              });
          }else{
            this.setState(() => {
              return {status: {status: "success", type: "success", message: "Message sent Successfully"}}
            });
            this.setState(() => {
              return {formData: {name: "", email: "", message: ""}}
            });
          }
          this.setState(() => {
            return {sending: false}
          });
      })
  }

  clearStatus = () => {
    this.setState(() => {
      return {status: {status: "", type: "", message: ""}}
    })
  }

  render(){

    return (
      <section id="contact" className="animate__animated animate__slower">
        <h1 className="headings">
            CONTACT ME
        </h1>
        <form className="form" id="form" onSubmit={this.sendmail}>
            <input type="text" name="name" onChange={this.handleChange} className="input" required placeholder="Enter Your Name..." />
            <input type="email" name="email" onChange={this.handleChange} className="input" required placeholder="Enter Your Email..." />
            <textarea name="message" id='msg' onChange={this.handleChange} cols="30" rows="10" maxLength="1000" required placeholder="Enter Your Message..."></textarea>
            {/* <p>Add Attachment (optional)</p>
            <input type="text" name="file" id="file" placeholder="File Name Here..." />
            <input type="file" name="attachment" /> */}
            <button type='submit' className='button' disabled={this.state.sending}>{this.state.sending ? <FaSpinner className='spinner' /> : "send"}</button>
            {/* <input type="submit" id="send" onClick={sendMail} value="SEND" /> */}
            {this.state.status.message !== "" && <p className='status-wrapper' style={{marginTop: "20px"}}><span className={`status-message ${this.state.status.type}`}>{this.state.status.message}</span><LiaTimesCircle className='status-close' onClick={this.clearStatus}/></p>}
        </form>
      </section>
    );
  }
}