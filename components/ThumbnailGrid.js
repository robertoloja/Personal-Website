import React from 'react'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({images}) => {
  return (
  <div style={styles}>
    {
      images.map((image) => <Thumbnail imgSrc={'/static/images/thumbnails/' + 
          image + '.png'} />)
    }
  </div>
  )
}

const styles = {
  height: '35%',
  width: '100%',
  background: '#ddd',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '5px'
}

export default ThumbnailGrid
