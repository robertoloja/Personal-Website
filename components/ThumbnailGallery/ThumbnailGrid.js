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
    height: '225px',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
}

export default ThumbnailGrid
