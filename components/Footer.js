import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/robertoloja/">
          <FontAwesomeIcon icon={faLinkedIn} />
        </a></li>
        <li><a href="https://github.com/robertoloja">
          <FontAwesomeIcon icon={faGithub} />
        </a></li>
      </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

