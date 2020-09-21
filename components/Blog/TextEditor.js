import React from 'react';

const TextEditor = (props) => {
    return <textarea value={props.text} style={{width: '80%', height: '200px'}}/>
}

export default TextEditor