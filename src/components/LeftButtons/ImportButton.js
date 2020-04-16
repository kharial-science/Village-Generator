import React, { Component } from 'react'

class ImportButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="ImportButton">
        Import another map
        <input type='file' onChange={this.props.handleImport}></input>
      </div>
    )
  }
}

export default ImportButton