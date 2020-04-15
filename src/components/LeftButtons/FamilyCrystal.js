import React, { Component } from 'react'

class FamilyCrystal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="FamilyCrystal" onClick={() => this.props.handleFamily(this.props.family)}>
        <img id={`${this.props.family}-family`} className={this.props.isSelected ? 'selected' : ''} src={require('../../assets/images/global_chooseFamilyLogo.svg')} alt={this.props.family} />
      </div>
    )
  }
}

export default FamilyCrystal