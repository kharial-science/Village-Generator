import React, { Component } from 'react';

import Map from './components/Map'

import ChooseFamily from './components/ChooseFamily'

import Toolbar from './components/Toolbar'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      family: 'pink',
      map: new Array(289).fill(null).map(() => new Object({ building: 'way' }))
    }

    this.state.map[0].building = 'house'

    this.state.map[144].building = ''
    this.state.map[288].building = 'townhall'

    this.handleDragDrop = this.handleDragDrop.bind(this)
    this.handleFamily = this.handleFamily.bind(this)
  }

  handleFamily(family) {
    this.setState({ family })
  }

  handleDragStart(e, building) {
    e.dataTransfer.setData("building", building)
  }

  handleDragDrop(e, index) {
    e.preventDefault()
    let building = e.dataTransfer.getData("building")
    let map = this.state.map
    map[index] = { building }
    this.setState({ map })
  }

  handleDragOver(e) {
    console.log("dragOver")
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    return (
      <div className="App">
        <Map family={this.state.family} map={this.state.map} handleDragOver={this.handleDragOver} handleDragDrop={this.handleDragDrop} />
        <ChooseFamily handleFamily={this.handleFamily} />
        <Toolbar family={this.state.family} handleDragStart={this.handleDragStart} />
      </div>
    );
  }
}

export default App;
