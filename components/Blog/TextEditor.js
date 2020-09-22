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

    let value = (new Remarkable()).render(props.text)
    const [content, setContent] = useState(value)

    const config = {
        readonly: false,
        preset: "inline"// all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <div style={{background: '#fff', padding: '10px'}}>
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={Prism.highlightAll}
            />
            {console.log(content)}
        </div>
    )
}

export default TextEditor