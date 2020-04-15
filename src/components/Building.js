import React, { Component } from 'react'

import './Building.css'

class Building extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const images = {
      townhall: require('../assets/images/familybuilding_townhall.svg'),
      way: require('../assets/images/global_way.svg'),
      house: {
        pink: require('../assets/images/building_housePink.svg'),
        blue: require('../assets/images/building_houseBlue.svg'),
        yellow: require('../assets/images/building_houseYellow.svg'),
        green: require('../assets/images/building_houseGreen.svg'),
      }
    }

    return (
      <div className="Building" draggable={true} onDragStart={(e) => this.props.handleDragStart(e, this.props.building)}>
        <img src={this.props.building === 'house' ? images.house[this.props.family] : images[this.props.building]} />
      </div>
    )
  }
}

export default Building