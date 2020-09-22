import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic'
import {Remarkable} from 'remarkable';
import 'static/css/prism.css'
import Prism from "prismjs";


const TextEditor = (props) => {
    const JoditEditor = dynamic(() =>
        import('jodit-react')
    )
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false,
        preset: "inline"// all options from https://xdsoft.net/jodit/doc/
    }
    let value = (new Remarkable()).render(props.text)

    return (
        <div style={{background: '#fff'}}>
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { Prism.highlightAll()
                }}
            /></div>)
}

export default TextEditor