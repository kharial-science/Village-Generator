import React, { Component } from 'react'

import './ChooseFamily.css'

import FamilyCrystal from './FamilyCrystal'

class ChooseFamily extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const familyArray = ['pink', 'blue', 'yellow', 'green'].map(elt => <FamilyCrystal isSelected={this.props.family === elt} family={elt} handleFamily={this.props.handleFamily} />)
    return (
      <div id="ChooseFamily">
        {familyArray}
      </div>
    )
  }
}

export default ChooseFamily