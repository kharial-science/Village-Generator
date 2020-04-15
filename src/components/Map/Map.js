import React, { Component } from 'react'

import './Map.css'

import Chunk from './Chunk'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderedMap: this.props.map.map((chunk, i) => {
        return (
          <Chunk
            key={i}
            index={i}
            building={chunk.building}
            family={this.props.family}
            handleChunkSelect={this.props.handleChunkSelect}
          />
        )
      }),
      currentSelectedChunk: 1250,
      currentFamily: this.props.family
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.family !== prevState.currentFamily) {
      prevState.renderedMap = nextProps.map.map((chunk, i) => {
        return (
          <Chunk
            key={i}
            index={i}
            building={chunk.building}
            family={nextProps.family}
            handleChunkSelect={nextProps.handleChunkSelect}
          />
        )
      })

      return { renderedMap: prevState.renderedMap, currentFamily: nextProps.family }
    }

    if (nextProps.selectedChunk !== prevState.currentSelectedChunk) {
      prevState.renderedMap[prevState.currentSelectedChunk] =
        <Chunk
          key={prevState.renderedMap[prevState.currentSelectedChunk].key}
          {...prevState.renderedMap[prevState.currentSelectedChunk].props}
          isSelected={false}
        />

      prevState.renderedMap[nextProps.selectedChunk] =
        <Chunk
          key={prevState.renderedMap[nextProps.selectedChunk].key}
          {...prevState.renderedMap[nextProps.selectedChunk].props}
          isSelected={true}
        />

      return { renderedMap: prevState.renderedMap, currentSelectedChunk: nextProps.selectedChunk }
    }

    if (prevState.renderedMap[prevState.currentSelectedChunk].props.building !== nextProps.map[prevState.currentSelectedChunk].building) {
      prevState.renderedMap[prevState.currentSelectedChunk] =
        <Chunk
          key={prevState.renderedMap[nextProps.selectedChunk].key}
          {...prevState.renderedMap[nextProps.selectedChunk].props}
          building={nextProps.map[prevState.currentSelectedChunk].building}
          isSelected={true}
        />

      return { renderedMap: prevState.renderedMap }
    }

    return null
  }

  render() {
    return (
      <div id="Map">
        {this.state.renderedMap}
      </div>
    )
  }
}

export default Map