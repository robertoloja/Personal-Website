import PropTypes from 'prop-types';
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactForm from './ContactForm'
import React from "react";

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {
            this.props.onCloseArticle()
        }}/>
        return (
            <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="about_me"
                         className={`${this.props.article === 'about_me' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">About Me</h2>

                    <AboutMe />

                    {close}
                </article>

                <article id="projects"
                         className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Projects</h2>

                    <Projects />

                    {close}
                </article>

                <article id="contact"
                         className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Contact</h2>

                    <ContactForm />

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
