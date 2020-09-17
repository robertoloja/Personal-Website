import React, {Component} from "react";
import ReactMarkdown from 'react-markdown';


export default class Post extends Component {
    constructor(props) {
        super(props);

        const separateFootNotes = text => {
            let message = text.split('{')
            let newMessage = []
            let footnotes = []

            message.map((x, i) => {
                if (x.includes('}')) {
                    footnotes.push(x.slice(0, x.indexOf('}')))
                    console.log()
                    newMessage += [x.replace('}', `[${i}](#footnote-${i})`)]
                } else {
                    newMessage += x
                }
            })

            return {
                bodyText: String(newMessage),
                footnotes: footnotes,
            }
        }

        this.state = {
            title: props.title,
            content: separateFootNotes(props.content),
            created: new Date(props.created),
            owner: props.owner,
        }
    }

    render() {
        return (
            <div style={outterDivStyle}>
                <h3 style={titleStyle}>
                    <strong style={strongStyle}>{this.state.title}</strong>
                    by {this.state.owner} on {this.state.created.toDateString()}
                </h3>
                <ReactMarkdown source={this.state.content.bodyText}/>

                <ul style={footnoteStyle}>
                    {this.state.content.footnotes.map((footnote, i) =>
                        <li id={`footnote-${i}`} key={i}>
                            <a href='#'>{i + 1}</a>: {footnote}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const outterDivStyle = {
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
    listStyleType: 'none',
}