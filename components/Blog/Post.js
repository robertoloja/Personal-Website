import React, {Component} from "react";
import ReactMarkdown from 'react-markdown';
import Floater from 'react-floater'

const pilcrow = '\r\n\r\n'

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            content: this.separateFootNotes(props.content),
            created: new Date(props.created),
            owner: props.owner,
        }
    }

    separateFootNotes(text) {
        const message = text.split('{')
        let newMessage = []
        let footnotes = []

        message.map((x, i) => {
            if (x.includes('}')) {
                footnotes.push(x.slice(0, x.indexOf('}')))
                newMessage.push(x.slice(x.indexOf('}') + 1, x.length))
            } else {
                newMessage.push(x)
            }
        })

        return {
            bodyText: newMessage,
            footnotes: footnotes,
        }
    }

    render() {
        const parseFootnotes = (phrase, i) => {
            if (this.state.content.footnotes[i]) {
                return (
                    <span className='mid'
                          style={{display: 'inline-block'}}
                          key={i}
                    >
                    <ReactMarkdown source={phrase}/>
                    <a style={footnoteStyle}>
                        <Floater showCloseButton={true} content={this.state.content.footnotes[i]}>{i + 1}</Floater>
                    </a>
                </span>)
            } else {
                return (
                    phrase.split(pilcrow).map((x, i) =>
                        <span className='mid' key={i}>
                        <ReactMarkdown source={x}/>
                        <br/>
                        <br/>
                    </span>)
                )
            }
        }

        return (
            <div style={outerDivStyle} key={this.props.title}>
                <style dangerouslySetInnerHTML={{
                    __html: `.mid>p { 
                        display: inline
                      }`
                }}/>

                <h3 style={titleStyle}>
                    <strong style={strongStyle}>{this.state.title}</strong>
                    by {this.state.owner} on {this.state.created.toDateString()}
                </h3>

                {this.state.content.bodyText.map(parseFootnotes)}
            </div>
        )
    }
}

const outerDivStyle = {
    background: 'rgba(30, 30, 30, 0.1)',
    border: 'solid black 1px',
    borderRadius: '5px',
    boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.1)',
    padding: '2rem',
    paddingLeft: '3rem',
    marginTop: '2rem',
    marginLeft: '0',
    maxWidth: '60%',
    fontFamily: "'Mukta', sans-serif",
    textAlign: 'justify',
}

const titleStyle = {
    paddingLeft: '0',
    paddingBottom: '0.5rem',
    fontWeight: 'normal',
    fontSize: '100%',
}

const strongStyle = {
    display: 'block',
    fontFamily: "'Fira Sans Condensed', sans-serif",
    fontSize: '130%',
    fontWeight: 'bold',
}

const footnoteStyle = {
    verticalAlign: 'super'
}
