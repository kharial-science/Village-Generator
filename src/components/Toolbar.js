import React, { Component } from 'react'

import Building from './Building'

class Toolbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const buildingArray = ['house', 'townhall', 'way', ''].map(building => <Building key={building} family={this.props.family} building={building} handleDragStart={this.props.handleDragStart} />)

    return (
      <div id="Toolbar">
        {buildingArray}
      </div>
    )
  }
}

export default Toolbar