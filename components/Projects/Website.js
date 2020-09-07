import React from 'react'
import ReactPlayer from "react-player";

const Website = () => {
    return (
        <div style={style}>
            <p>
                The frontend of this website is written in React, using the
                <a href="https://nextjs.org/">Next.JS framework</a>.
            </p>
            <p>
                This website's repository is <a href='https://github.com/robertoloja/Personal-Website'>here</a>.
            </p>
        </div>
    )
}

const style = {
    padding: '40px',
}

export default Website
