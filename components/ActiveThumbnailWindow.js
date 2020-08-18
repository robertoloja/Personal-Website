import React from 'react'

const ActiveThumbnailWindow = () => {
  return (
    <div style={styles}>
      <img 
        src="/static/images/housing-render.png" 
        style={{
          width: '100%',
          padding: '20px'
        }}
      />
    </div>
  )
}

const styles = {
  height: '65%',
  width: '100%',
  position: 'relative'
}

export default ActiveThumbnailWindow
