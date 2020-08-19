import React from 'react'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({image_filenames, handleClick}) => {
    return (
        <div style={styles}>
            {
                image_filenames.map((image, i) => <Thumbnail
                        imgSrc={'/static/images/thumbnails/' +
                        image + '.png'}
                        handleClick={handleClick}
                        index={i}
                        key={i}
                    />
                )
            }
        </div>
    )
}

const styles = {
    height: '25%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5px'
}

export default ThumbnailGrid
