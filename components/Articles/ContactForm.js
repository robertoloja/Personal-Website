import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from 'emailjs-com'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'

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
        <div style={{width: '80%'}}>
            <form onSubmit={sendEmail}>
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="from_name" id="name" required />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="from_email" id="email" required />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4" required ></textarea>
                </div>
                <ul className="actions">
                    <li>
                        <button type="submit" value="Send Message" className="special">Send Message</button>
                    </li>
                    <li><input type="reset" value="Reset"/></li>
                </ul>
            </form>

            <ReCAPTCHA
                style={{marginBottom: '30px'}}
                sitekey="6LfqnsAZAAAAAD9R9DQ41C3XHDp8iCdsRMpayupJ"
            />
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/robertoloja/">
                    <FontAwesomeIcon icon={faLinkedIn}/>
                </a></li>
                <li><a href="https://github.com/robertoloja">
                    <FontAwesomeIcon icon={faGithub}/>
                </a></li>
            </ul>
        </div>
    )
}

export default ContactForm
