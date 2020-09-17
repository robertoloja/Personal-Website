import React, {Component} from "react";

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
    render() {
        return (
            <div style={outterDivStyle}>
                <h3>
                    {this.state.title}
                </h3>
                <p>
                    by {this.state.owner}, on {this.state.created.toDateString()}
                </p>
                <p>
                    {this.state.content}
                </p>
            </div>
        )
    }
}

const outterDivStyle = {
    border: 'solid black 1px',
    boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.2)',
    padding: '1rem',
    margin: '2rem',
}


