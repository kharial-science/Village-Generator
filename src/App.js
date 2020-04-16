import React, { Component } from 'react';

import './App.css'

import Map from './components/Map/Map'
import ChooseFamily from './components/LeftButtons/ChooseFamily'
import Toolbar from './components/RightButtons/Toolbar'
import SaveButton from './components/LeftButtons/SaveButton'
import ImportButton from './components/LeftButtons/ImportButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      family: 'pink',
      map: new Array(2601).fill(null).map(() => new Object({ building: undefined })),
      selectedChunk: 1299
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChunkSelect = this.handleChunkSelect.bind(this)
    this.handleFamilySelect = this.handleFamilySelect.bind(this)
    this.handleBuildingClick = this.handleBuildingClick.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleImport = this.handleImport.bind(this)
  }

  componentDidMount() {
    document.addEventListener('wheel', this.displayMenus)

    document.onkeypress = this.handleKeyPress
  }

  handleKeyPress(e) {
    let selectedChunk = this.state.selectedChunk

    if (e.charCode === 122) selectedChunk -= 51 // go top
    else if (e.charCode === 100) selectedChunk += 1 // go right
    else if (e.charCode === 115) selectedChunk += 51 // go down
    else if (e.charCode === 113) selectedChunk -= 1 // go left

    if (selectedChunk < 0) selectedChunk = 2601 + selectedChunk

    if (selectedChunk !== this.state.selectedChunk) this.setState({ selectedChunk: selectedChunk })
  }

  handleFamilySelect(family) {
    this.setState({ family: family })
  }

  handleBuildingClick(e, building) {
    this.state.map[this.state.selectedChunk] = { building }
    this.setState({ map: this.state.map })
  }

  handleChunkSelect(index) {
    this.setState({ selectedChunk: index })
  }

  handleSave() {
    let rows = new Array(51).fill(null).map(() => new Array())
    for (let i = 0; i < this.state.map.length; i++) {
      rows[Math.floor(i / 51)].push(this.state.map[i].building)
    }

    let csvContent = "data:text/csv;charset=utf-8,"
    rows.forEach(rowArray => {
      console.log(rowArray)
      let row = rowArray.join(",")
      console.log(row)
      csvContent += row + "\r\n"
    })


    console.log(csvContent)
    var encodedUri = encodeURI(csvContent)
    var link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `${this.state.family}Village.csv`)
    document.body.appendChild(link)

    link.click()
  }

  handleImport(e) {

    let file = e.target.files[0]

    let fileReader = new FileReader()
    fileReader.onloadend = (e) => {
      const content = fileReader.result
      let map = []
      let rows = content.split('\r\n')
      rows = rows.slice(0, rows.length - 1)

      for (let i = 0; i < 50; i++) {
        rows[i].split(',').forEach(elt => {
          map.push({ building: elt })
        })
      }

      console.log(map)

      this.setState({ map })
    }
    fileReader.readAsText(file)
  }

  render() {
    return (
      <div id="App">
        <div id="left-column" className="menu">
          <ChooseFamily family={this.state.family} handleFamily={this.handleFamilySelect} />
          <SaveButton handleSave={this.handleSave} />
          <ImportButton handleImport={this.handleImport} />
        </div>

        <Map family={this.state.family} map={this.state.map} selectedChunk={this.state.selectedChunk} handleChunkSelect={this.handleChunkSelect} />

        <div id="right-column" className="menu">
          <Toolbar family={this.state.family} handleBuildingClick={this.handleBuildingClick} />
        </div>

      </div>
    );
  }
}

export default App;
