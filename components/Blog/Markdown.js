import {Remarkable} from 'remarkable';
import React, {Component} from 'react';

export default class Markdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.content,
            md: new Remarkable(),
        }
    }

    render() {
        return (
        <div dangerouslySetInnerHTML={{__html: this.state.md.render(this.state.content)}}>
        </div>
    )}
}
