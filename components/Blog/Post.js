import React, { Component } from 'react';
import Prism from 'prismjs';
import 'static/css/prism.css'
import Markdown from './Markdown';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            content: props.content,
            created: new Date(props.created),
            owner: props.owner,
        }
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div style={style.outerDivStyle} key={this.props.title}>
                <style dangerouslySetInnerHTML={{ // This is needed to position footnote links correctly.
                    __html: `.mid>p { display: inline; white-space: normal; } pre[class*="language-"] {font-size: 0.8rem}`
                }}/>

                <h3 style={style.titleStyle}>
                    <strong style={style.strongStyle}>{this.state.title}</strong>
                    by {this.state.owner} on {this.state.created.toDateString()}
                </h3>
                <Markdown content={this.state.content}/>
            </div>
        )
    }
}

const style = {
    outerDivStyle: {
        background: 'rgba(30, 30, 30, 0.1)',
        border: 'solid black 1px',
        borderRadius: '5px',
        boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.1)',
        padding: '2rem',
        paddingLeft: '3rem',
        margin: '0 auto',
        marginTop: '2rem',
        maxWidth: '70%',
        fontFamily: "'Mukta', sans-serif",
        textAlign: 'justify',
    },
    titleStyle: {
        paddingLeft: '0',
        paddingBottom: '0.5rem',
        fontWeight: 'normal',
        fontSize: '100%',
    },
    strongStyle: {
        display: 'block',
        fontFamily: "'Fira Sans Condensed', sans-serif",
        fontSize: '130%',
        fontWeight: 'bold',
    },
    footnoteStyle: {
        verticalAlign: 'super',
        fontSize: '80%',
    }
}