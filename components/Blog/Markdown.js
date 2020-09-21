import {Remarkable} from 'remarkable';
import React, {Component} from 'react';

export default class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            html: (new Remarkable()).render(props.content),
            md: new Remarkable(),
        }
    }

    componentDidMount() {
        this.setState({
            content: this.state.content,
            html: this.state.md.render(this.state.content),
            md: new Remarkable(),
        })
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: `pre[class*="language-"] code { 
                               font-family: Liberation;
                               font-size: 0.8rem; 
                               padding: 0.6rem; 
                               line-height: 1; 
                               margin: 0.2rem 
                             }  
                             .footnote-backref { 
                               vertical-align: super; 
                               font-size: 80%
                             }`
                }}/>
                {this.state.html ? <div dangerouslySetInnerHTML={{__html: this.state.html}}/> : ''}
            </div>
        )
    }
}