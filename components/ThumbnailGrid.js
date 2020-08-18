import React from 'react'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = () => {
  return (
  <div style={styles}>
    <Thumbnail imgSrc='/static/images/HiveInfo.png' />
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
  </div>
  )
}

const styles = {
  height: '100px',
  width: '100%',
  background: '#888',
  display: 'flex',
  flexWrap: 'wrap'
}

export default ThumbnailGrid
