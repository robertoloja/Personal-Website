import React from 'react'

const Thumbnail = ({imgSrc, handleClick, index}) => {
    return (
        <div style={styles}>
            <img
                src={imgSrc}
                style={{
                    width: '100%',
                    padding: '2px',
                }}
                onClick={handleClick}
                data-index={index}
            />
        </div>
    )
}

const styles = {
    height: '100%',
    width: '25%',
    position: 'relative'
}

export default Thumbnail
