import {Remarkable} from 'remarkable';
import React, {Component} from 'react';
import 'static/css/prism.css'
import Prism from "prismjs";

export default class Markdown extends Component {
    constructor(props) {
        super(props);
        const markdown = new Remarkable({typographer: true})
        this.state = {
            content: props.content,
            md: markdown,
            html: markdown.render(props.content),
        }
    }

    componentDidMount() {
        this.setState({
            content: this.state.content,
            md: this.state.md,
            html: this.state.md.render(this.state.content),
        })
        Prism.highlightAll();
    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: this.state.html}}/>
    }
}