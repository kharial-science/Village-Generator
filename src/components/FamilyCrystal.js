import React, { Component } from 'react'

import './FamilyCrystal.css'

class FamilyCrystal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="FamilyCrystal">
        <img id={`${this.props.family}-family`} src={require('../assets/images/global_chooseFamilyLogo.svg')} alt={this.props.family} />
      </div>
    )
  }
}

export default FamilyCrystal