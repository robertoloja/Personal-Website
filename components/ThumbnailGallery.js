import React, {Component} from 'react'
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
        this.setState({activeIndex: newActiveIndex})
    }

    render() {
        return (
            <div style={thumbnailGalleryStyles}>

                {/* Left */}
                <div style={{flex: 1}}>
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
                <div style={{
                    flex: 1,
                    padding: '50px',
                    color: 'white',
                }}>
                    <div style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                        borderRadius: '5px',
                        padding: '40px',
                        paddingBottom: '20px',
                        verticalAlign: 'text-top',
                    }}>
                        {this.state.image_captions[this.state.activeIndex].map((x) => <p key={x}>{x}</p>)}
                    </div>
                </div>
            </div>
        )
    }
}

const thumbnailGalleryStyles = {
    background: 'rgba(75, 75, 75, 0.0)',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    paddingTop: 0,
    paddingBottom: '100px',
    display: 'flex',
    borderRadius: '5px',
    verticalAlign: 'text-top'
}
