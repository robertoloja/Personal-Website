import React from 'react'
import ReactPlayer from "react-player";

const Other = () => {
    return (
        <div style={style}>
            <p>
                I occasionally make music. In this one, I played keyboard, bass, and guitar,
                and programmed the drums in GarageBand.
            </p>
            <ReactPlayer
                url='https://soundcloud.com/roberto-loja-488022066/riff1-2020-07-08-1017-am'
                width='25%'
                height='80px'
            />
        </div>
    )
}

const style = {
    padding: '40px',
}

export default Other
