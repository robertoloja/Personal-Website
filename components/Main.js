import PropTypes from 'prop-types';
import Projects from './Articles/Projects'
import AboutMe from './Articles/AboutMe'
import ContactForm from './Articles/ContactForm'
import React from "react";

class Main extends React.Component {
    render() {
        let close = <div className="close"
                         onClick={() => {
                            this.props.onCloseArticle()
                    }}/>

        return (
            <div id="main"
                 style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="projects"
                         style={{
                             display: 'none',
                             padding: '1rem',
                             margin: 0,
                         }}
                         className={`
                            ${this.props.article === 'projects' ? 'active' : ''} 
                            ${this.props.articleTimeout ? 'timeout' : ''}
                         `}>
                    <h2 className="major">Projects</h2>
                    <Projects />
                    {close}
                </article>

                <article id="contact"
                         style={{display: 'none'}}
                         className={`
                            ${this.props.article === 'contact' ? 'active' : ''} 
                            ${this.props.articleTimeout ? 'timeout' : ''}
                         `}>
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
