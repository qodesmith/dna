import React from 'react'
import Strand from 'components/Strand'

const App = () => {
  let delay = 0
  const strands = []

  for (let i = 0; i < 40; i++) {
    strands.push(<Strand key={i} delay={delay} />)
    delay += (.125 / 1.5)
  }

  return strands
}

export default App
