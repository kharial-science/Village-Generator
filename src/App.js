import React, { Component } from 'react';

import Map from './components/Map'

import ChooseFamily from './components/ChooseFamily'

import Toolbar from './components/Toolbar'

import SaveButton from './components/SaveButton'

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
    this.handleSave = this.handleSave.bind(this)
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

  handleSave() {
    let rows = new Array(17).fill(null).map(() => new Array())
    for (let i = 0; i < this.state.map.length; i++) {
      rows[Math.floor(i / 17)].push(this.state.map[i].building)
    }
    // console.log(rows)

    // const rows = [
    //   ["name1", "city1", "some other info"],
    //   ["name2", "city2", "more info"]
    // ];

    // let csvContent = "data:text/csv;charset=utf-8,"
    // rows.forEach(function (rowArray) {
    //   console.log(rowArray)
    //   let row = rowArray.join(",");
    //   console.log(row)
    //   csvContent += row + "\r\n";
    // });

    let csvContent = "data:text/csv;charset=utf-8,"
    rows.forEach(function (rowArray) {
      console.log(rowArray)
      let row = rowArray.join(";");
      console.log(row)
      csvContent += row + "\r\n";
    });


    console.log(csvContent)
    var encodedUri = encodeURI(csvContent)
    var link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `${this.state.family}Village.csv`)
    document.body.appendChild(link)

    link.click()
  }

  render() {
    return (
      <div className="App">
        <Map family={this.state.family} map={this.state.map} handleDragOver={this.handleDragOver} handleDragDrop={this.handleDragDrop} />
        <ChooseFamily handleFamily={this.handleFamily} />
        <Toolbar family={this.state.family} handleDragStart={this.handleDragStart} />
        <SaveButton handleSave={this.handleSave} />
      </div>
    );
  }
}

export default App;
