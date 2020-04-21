import React, { Component } from 'react'

class Building extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const images = {
      townhall: {
        pink: require('../../assets/images/familybuilding_townhallPink.svg'),
        blue: require('../../assets/images/familybuilding_townhallBlue.svg'),
        yellow: require('../../assets/images/familybuilding_townhallYellow.svg'),
        green: require('../../assets/images/familybuilding_townhallGreen.svg')
      },
      way: require('../../assets/images/global_way.svg'),
      house: {
        pink: require('../../assets/images/building_housePink.svg'),
        blue: require('../../assets/images/building_houseBlue.svg'),
        yellow: require('../../assets/images/building_houseYellow.svg'),
        green: require('../../assets/images/building_houseGreen.svg'),
      }
    }

    return (
      <div className="Building" draggable={true} onClick={(e) => this.props.handleBuildingClick(e, this.props.building)}>
        <img src={this.props.building === 'house' || this.props.building === 'townhall' ? images[this.props.building][this.props.family] : images[this.props.building]} />
      </div>
    )
  }
}

export default Building