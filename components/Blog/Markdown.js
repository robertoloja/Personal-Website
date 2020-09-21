import {Remarkable} from 'remarkable';
import React, {Component} from 'react';
import 'static/css/prism.css'
import Prism from "prismjs";

export default class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            md: new Remarkable(),
            html: (new Remarkable()).render(props.content),
        }
    }

    componentDidMount() {
        this.setState({
            content: this.state.content,
            md: new Remarkable(),
            html: (new Remarkable()).render(this.state.content),
        })
        Prism.highlightAll();

    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: this.state.html}}/>
    }
}