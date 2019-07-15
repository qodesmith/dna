import React from 'react'

const px = num => `${num}px`
const s = num => `${num}s`

const Strand = ({ size = 20, delay = 0 }) => {
  const strandStyle = { width: px(size * 8) }
  const circleStyle = { width: px(size), height: px(size), animationDelay: s(delay) }
  const barStyle = { width: px(size * 6), height: px(size / 5), animationDelay: s(delay) }

  return (
    <div className="df mha align-items-center mt1" style={strandStyle}>
      <div className="circle one" style={circleStyle} />
      <div className="relative">
        <div className="bar" style={barStyle} />
        <div className="bar two" style={barStyle} />
      </div>
      <div className="circle two" style={circleStyle} />
    </div>
  )
}

export default Strand
