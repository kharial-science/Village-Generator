import React, { Component } from 'react'

import './Chunk.css'

class Chunk extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Chunk" onDragOver={this.props.handleDragOver} onDrop={e => this.props.handleDragDrop(e, this.props.index)}>
        {this.props.building ? <img src={this.props.building === 'house' ? require(`../assets/images/building_house${this.props.family.charAt(0).toUpperCase() + this.props.family.slice(1)}.svg`) : this.props.building === 'townhall' ? require('../assets/images/familybuilding_townhall.svg') : require('../assets/images/global_way.svg')} /> : ''}
      </div>
    )
  }
}

export default Chunk