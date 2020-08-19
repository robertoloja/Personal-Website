import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from 'emailjs-com'

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_SMPJvZyB', e.target, 'user_grrrmewkPIwj6Xm5SsgKd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
  <div>
    <form onSubmit={sendEmail}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="from_name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="from_email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li><button type="submit" value="Send Message" className="special">Send Message</button></li>
        <li><input type="reset" value="Reset" /></li>
      </ul>
    </form>
    <ReCAPTCHA
      style={{marginBottom: '30px'}}
      sitekey="6LfqnsAZAAAAAD9R9DQ41C3XHDp8iCdsRMpayupJ"
    />
  </div>
  )
}

export default ContactForm
