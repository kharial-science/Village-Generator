import React, { Component } from 'react';

import Map from './components/Map'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      family: 'pink'
    }
  }

  render() {
    return (
      <div className="App">
        <Map family={this.state.family} />
      </div>
    );
  }
}

export default App;
