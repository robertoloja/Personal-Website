import React, { Component } from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

export default class ThumbnailGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image_filenames: props.images.map((x) => x.image_filename),
      image_captions: props.images.map((x) => x.image_caption),
      activeIndex: 0
    }
  }

  handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index')
    this.setState({ activeIndex: newActiveIndex })
  }

  render() {
    console.log(this.state.image_captions)
    return (
      <div style={thumbnailGalleryStyles}>

        {/* Left */}
        <div style={{ flex: 1 }}>
          <ActiveThumbnailWindow 
            activeIndex={this.state.activeIndex}
            image_filenames={this.state.image_filenames}
          />

          <ThumbnailGrid 
            image_filenames={this.state.image_filenames}
            handleClick={this.handleClick}
          />
        </div>

        {/* Right */}
        <div style={{ flex: 1, padding: '50px', color: 'white' }}>
          <p>
            {this.state.image_captions[this.state.activeIndex]}
          </p>
        </div>
      </div>
    )
  }
}

const thumbnailGalleryStyles = {
  background: 'rgba(75, 75, 75, 0.3)',
  height: '500px',
  width: '100%',
  margin: '10px auto',
  display: 'flex',
  borderRadius: '5px'
}
