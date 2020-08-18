import React from 'react'

const Thumbnail = ({ imgSrc }) => {
  return (
  <div style={styles}>
    <img src={imgSrc} style={{width: '100%', padding: '2px'}}/>
  </div>
  )
}

const styles = {
  height: '100%',
  width: '25%',
  background: '#ddd',
}

export default Thumbnail
