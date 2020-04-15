import React, { Component } from 'react'

class SaveButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="SaveButton">
        <button onClick={this.props.handleSave}>Save</button>
      </div>
    )
  }
}

export default SaveButton