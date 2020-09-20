import React, {Component} from "react";
import Markdown from 'react-markdown/with-html';
import Floater from 'react-floater';

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
        /**
         * Handle footnote syntax separately from standard markdown. Footnotes are demarcated by curly braces. E.g.:
         *   > This _phrase_ is formatted with **Markdown**, and can have footnotes{This is the footnote text.}.
         */
        const footnoteRegex = /{(.*?)}/g
        const footnotes = [...text.matchAll(footnoteRegex)].map(x => x[1]) // save capture group (i.e. strip braces)

        let message = text.split('{')
            .map(x => {
                let y = x.split('}')
                return y[1] ? y[1] : y[0]  // y == ['footnote}', '. Sentence after footnote.']
            })

        return {
            bodyText: message,
            footnotes: footnotes,
        }
    }

    render() {
        console.log(this.state.content.bodyText)
        return (
            <div style={outerDivStyle} key={this.props.title}>
                <style dangerouslySetInnerHTML={{ // This is needed to position footnote links correctly.
                    __html: `.mid>p { display: inline; white-space: normal }`}}/>

                <h3 style={titleStyle}>
                    <strong style={strongStyle}>{this.state.title}</strong>
                    by {this.state.owner} on {this.state.created.toDateString()}
                </h3>

                {this.state.content.bodyText.map(
                    (x, i) => {
                        if (!this.state.content.footnotes[i]) {
                            console.log('1: ', x)
                            return <Markdown source={x}/>
                        } else {
                            console.log('2: ', x)
                            return (
                                <span className='mid' style={{display: 'inline-block'}}>
                                <Markdown source={x}/>
                                <a style={footnoteStyle}>
                                    <Floater showCloseButton={true}
                                             content={this.state.content.footnotes[i]}>{i + 1}
                                    </Floater>
                                </a>
                            </span>)
                        }
                    }
                )}
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
    verticalAlign: 'super',
    fontSize: '80%',
}
