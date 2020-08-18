import React from 'react'

const Thumbnail = ({ imgSrc }) => {
  return (
  <div style={styles}>
    <img src={imgSrc} style={{ objectFit: 'cover' }}/>
  </div>
  )
}

const styles = {
  height: '200px',
  width: '200px',
  background: '#888',
}

export default Thumbnail
