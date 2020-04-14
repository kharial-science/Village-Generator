import React, { Component } from 'react'

import Chunk from './Chunk'

import './Map.css'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: new Array(289).fill({ building: undefined })
    }

    // let map = []
    // for (let i = 0; i < 289; i++) {
    //   map.push({
    //     building: undefined
    //   })
    // }

    // console.log(map)
    // this.setState({ map }) // Doesn't work
  }
  render() {

    console.log(this.state)

    let chunkArray = []
    for (let chunk of this.state.map) {
      chunkArray.push(<Chunk building={chunk.building} />)
    }
    return (
      <div id="Map">
        {chunkArray}
      </div>
    )
  }
}

export default Map