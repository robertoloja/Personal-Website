import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditor = (props) => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createWithText(props.text),
    );
    return <Editor editorState={editorState} onChange={setEditorState} />
}

export default TextEditor