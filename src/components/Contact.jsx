import React from 'react';
import { LiaTimesCircle } from 'react-icons/lia';
import { FaSpinner } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import MotionComponent from './MotionComponent';

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState({ status: "", type: "", message: "" });
  const [sending, setSending] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(oldState => ({ ...oldState, [name]: value }));
  };

  const sendMail = async (name, email, message) => {
    try {
      const send = await emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, { name, email, message }, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
      if (send.status === 200) {
        return true;
      }
    } catch (error) {
      return error;
    }
  };

  const sendmail = (e) => {
    e.preventDefault();
    setSending(true);

    sendMail(formData.name, formData.email, formData.message)
    .then(send => {
      if (send === true) {
        setStatus({ status: "success", type: "success", message: "Message sent Successfully" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ status: "failed", type: "failed", message: "Message not Sent" });
      }
      setSending(false);
    });
  };

  const clearStatus = () => {
    setStatus({ status: "", type: "", message: "" });
  };

  const Content = () => { 
    return (
      <>
        <h1 className="headings">
          CONTACT ME
        </h1>
        <form className="form" onSubmit={sendmail}>
          <input type="text" name="name" onChange={handleChange} value={formData.name} className="input" required placeholder="Enter Your Name..." />
          <input type="email" name="email" onChange={handleChange} value={formData.email} className="input" required placeholder="Enter Your Email..." />
          <textarea name="message" id='msg' onChange={handleChange} value={formData.message} cols="30" rows="10" maxLength="1000" required placeholder="Enter Your Message..." />
          <button type='submit' className='button' disabled={sending}>{sending ? <FaSpinner className='spinner' /> : "send"}</button>
          {status.message !== "" && <p className='status-wrapper' style={{ marginTop: "20px" }}><span className={`status-message ${status.type}`}>{status.message}</span><LiaTimesCircle className='status-close' onClick={clearStatus} /></p>}
        </form>
      </>
    );
  };

  return (
    <MotionComponent tag={"section"} id="contact" content={Content() } />
  );
};

export default Contact;