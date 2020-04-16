import React, { Component } from 'react'

class Chunk extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.building)
    return (
      <div className={`Chunk ${this.props.isSelected ? 'selected' : ''}`} onClick={() => this.props.handleChunkSelect(this.props.index)}>
        {this.props.building ? <img src={this.props.building === 'house' ? require(`../../assets/images/building_house${this.props.family.charAt(0).toUpperCase() + this.props.family.slice(1)}.svg`) : this.props.building === 'townhall' ? require('../../assets/images/familybuilding_townhall.svg') : require('../../assets/images/global_way.svg')} /> : ''}
      </div>
    )
  }
}

export default Chunk