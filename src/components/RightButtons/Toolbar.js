import React, { Component } from 'react'

import './Toolbar.css'

import Building from './Building'

class Toolbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const buildingArray = ['house', 'townhall', 'way', ''].map(building => <Building key={building} family={this.props.family} building={building} handleBuildingClick={this.props.handleBuildingClick} />)

    return (
      <div id="Toolbar">
        {buildingArray}
      </div>
    )
  }
}

export default Toolbar