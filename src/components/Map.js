import React, { Component } from 'react'

import Chunk from './Chunk'

import './Map.css'

class Map extends Component {
  constructor(props) {
    super(props)

  }
  render() {

    let chunkArray = []
    let i = 0
    for (const chunk of this.props.map) {
      chunkArray.push(<Chunk key={i} index={i} building={chunk.building} family={this.props.family} handleDragOver={this.props.handleDragOver} handleDragDrop={this.props.handleDragDrop} />)
      i++
    }
    return (
      <div id="Map">
        {chunkArray}
      </div>
    )
  }
}

export default Map