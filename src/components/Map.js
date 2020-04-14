import React, { Component } from 'react'

import Chunk from './Chunk'

import './Map.css'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: new Array(289).fill({ building: 'way' })
    }
  }
  render() {

    let chunkArray = []
    for (const chunk of this.state.map) {
      chunkArray.push(<Chunk building={chunk.building} family={this.props.family} />)
    }
    return (
      <div id="Map">
        {chunkArray}
      </div>
    )
  }
}

export default Map