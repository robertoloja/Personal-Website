import React from 'react';

const TextEditor = (props) => {
    return <textarea defaultValue={props.text} style={{width: '80%', height: '200px'}}/>
}

export default TextEditor