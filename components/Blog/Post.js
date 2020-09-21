import React, { Component } from 'react';
import Markdown from './Markdown';
import Prism from 'prismjs';
import 'static/css/prism.css'

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
                <style dangerouslySetInnerHTML={style.classes}/>

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
    classes: {__html: `pre[class*="language-"] code { 
                               font-family: Liberation;
                               font-size: 0.8rem; 
                               padding: 0.6rem; 
                               line-height: 1; 
                               margin: 0.2rem 
                             }  
                             .footnote-backref { 
                               verticalAlign: super; 
                               font-size: 80%
                             }`},
    outerDivStyle: {
        background: 'rgb(227,226,226, 0.5)',
        border: 'solid #bbb 1px',
        borderRadius: '5px',
        boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.1)',
        padding: '2rem',
        paddingLeft: '3rem',
        marginTop: '2rem',
        fontFamily: "'Mukta', sans-serif",
        textAlign: 'justify',
    },
    titleStyle: {
        paddingLeft: '1.5rem',
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
}