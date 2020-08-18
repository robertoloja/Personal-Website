import React, { Component } from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

export default class ThumbnailGallery extends Component {
  render() {
    return (
      <div style={thumbnailGalleryStyles}>
        {/* Left */}
        <div style={{ flex: 1 }}>
          <ActiveThumbnailWindow />
          <ThumbnailGrid />
        </div>

        {/* Right */}
        <div style={{ flex: 1, padding: '40px', color: 'black' }}>
          Project description
        </div>
      </div>
    )
  }
}

const thumbnailGalleryStyles = {
  background: '#ddd',
  height: '500px',
  width: '100%',
  margin: '10px auto',
  display: 'flex'
}
