import React, { Component } from 'react'
import './index.css'
import { setBg, styledH1 } from './Styles'




export default class App extends Component {
  render() {
    return (
      <div style={setBg}>
        {/* <h1 style={styledH1}>Hey there</h1> */}
      </div>
    )
  }
}
