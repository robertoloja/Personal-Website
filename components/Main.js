import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'
import MenuTabs from './MenuTabs'
import emailjs from 'emailjs-com'

class Main extends React.Component {
  handleSubmit() {
    event.preventDefault();
    console.log("submit!")
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_SMPJvZyB', e.target, 'user_grrrmewkPIwj6Xm5SsgKd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about_me" className={`${this.props.article === 'about_me' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Foo</p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>

          <MenuTabs />

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>

          <form onSubmit={this.sendEmail}>
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

          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/robertoloja/">
              <FontAwesomeIcon icon={faLinkedIn} />
            </a></li>
            <li><a href="https://github.com/robertoloja">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
