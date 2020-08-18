import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'
import ThumbnailGallery from './ThumbnailGallery'

class Main extends React.Component {
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
          <h3>SmartHive</h3>
          <p>
            Bee populations have been in decline since the late 1990's (citation needed) and, since pollination by bees accounts 
            for as much as 40% of global agricultural production (citation needed), the decline in bee populations has direct 
            consequences to humans. 
          </p>

          <p>
            Counter-intuitively, urban bee populations have declined slower than non-urban bees, a fact explained by the higher number 
            of beekeepers residing in cities (e.g. <a href='http://torontobeekeeping.ca/'>The Toronto Beekepers Collective</a>). Thus, 
            urban hives are generally more well tended.
          </p>

          <p>
            But as the global decline of bee populations accelerates, and the time investment of training beekepers remains constant,
            it becomes important to increase existing beekeepers' reach. SmartHive was designed as a tool for remote monitoring of 
            beehives' key health indicators.
          </p>
          <ThumbnailGallery 
            images={[
              {
                image_filename: 'housing-render', 
                image_caption: ['A laser-cut acryllic housing was designed for the weight sensors and chosen computing platform, ' + 
                                'a Raspberry Pi. This would support the weight of a standard Langstroth hive, allowing for ' +
                                'remote measurement of a hive\'s weight.',
                                'As bees do not hibernate, but do stop making honey, they rely on existing honey stores ' +
                                'to survive until Spring. Tracking hive weight over winter allows for early identification ' +
                                'of hives at-risk of starving, which can be rescued in greenhouses.']
              },
              {
                image_filename: 'smarthive', 
                image_caption: ['The finished prototype included ingress/egress sensors for estimating hive population changes, ' +
                                'as well as temperature and humidity sensors.',
                                'Temperature sensors were located along four of the hive\'s eight corners. By measuring temperature ' +
                                'differences along the axes defined by these sensor locations, we could estimate the position of a hive ' +
                                'cluster during Winter. The closer to an outter wall the cluster, the more at-risk the hive.']
              },
              {
                image_filename: 'HiveInfo', 
                image_caption: ['The Android app provided near real-time information on individual hives.']
              },
              {
                image_filename: 'HiveList', 
                image_caption: ['Multiple hives could be monitored remotely through the Android app, whether by the same beekeeper, or ' +
                                'groups of beekepers sharing access permissions.',
                                'All authentication was handled through Google\'s Firebase services.']
              },
            ]} 
          />
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
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
