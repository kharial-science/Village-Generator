import React, { Component } from 'react'

import FamilyCrystal from './FamilyCrystal'

import './ChooseFamily.css'

class ChooseFamily extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const familyArray = ['pink', 'blue', 'yellow', 'green'].map(elt => <FamilyCrystal family={elt} />)
    return (
      <div id="ChooseFamily">
        {familyArray}
      </div>
    )
  }
}

export default ChooseFamily