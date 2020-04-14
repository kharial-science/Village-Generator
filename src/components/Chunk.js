import React, { Component } from 'react'

import './Chunk.css'

class Chunk extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(<img src={this.props.building === 'house' ? `building_house${this.props.family.charAt(0).toUpperCase() + this.props.family.slice(1)}.svg` : this.props.building === 'townhall' ? 'familybuilding_townhall.svg' : 'global_way.svg'} />)
    return (
      <div class="Chunk">
        {/* <img src={require('../assets/images/building_housePink.svg')} alt='house' /> */}
        {this.props.building ? <img src={this.props.building === 'house' ? require(`../assets/images/building_house${this.props.family.charAt(0).toUpperCase() + this.props.family.slice(1)}.svg`) : this.props.building === 'townhall' ? require('../assets/images/familybuilding_townhall.svg') : require('../assets/images/global_way.svg')} /> : ''}
      </div>
    )
  }
}

export default Chunk