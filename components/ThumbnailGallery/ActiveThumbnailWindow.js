import React from 'react'

const ActiveThumbnailWindow = ({image_filenames, activeIndex}) => {
    return (
        <div style={styles}>
            <img
                src={'/static/images/' + image_filenames[activeIndex] + '.png'}
                style={{
                    maxHeight: '30rem',
                    maxWidth: '95%',
                    margin: 'auto',
                    padding: '20px',
                    display: 'block',
                }}
            />
        </div>
    )
}

const styles = {
    height: '75%',
    width: '100%',
    position: 'relative'
}

export default ActiveThumbnailWindow
