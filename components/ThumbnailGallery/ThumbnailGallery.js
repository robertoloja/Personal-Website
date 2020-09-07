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

    componentDidMount() {
        this.props.images.forEach((image) => {
            const img = new Image();
            img.src = image.image_filename;
        });
    }

    render() {
        return (
            <div style={thumbnailGalleryStyles}>

                {/* Left */}
                <div style={{
                    flex: 1,
                    marginLeft: '-1.5rem',
                    marginTop: '-1rem',
                    marginRight: 0,
                }}>
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
                    padding: '1.5rem',
                    color: 'white',
                }}>
                    <div style={{
                        background: 'rgba(30, 30, 30, 0.5)',
                        borderRadius: '5px',
                        verticalAlign: 'middle',
                        boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.2)',
                        textAlign: 'justify',
                        color: '#ddd',
                        margin: 'auto -2rem',
                        padding: '1.5rem',
                        paddingBottom: '0.1rem',
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
    paddingBottom: '2rem',
    display: 'flex',
    borderRadius: '5px',
    verticalAlign: 'text-top'
}
