import React, { Component } from 'react'
import './intro.css'

export default class Introduction extends Component {
  render() {
    return (
        
      <div className = 'whole'>
        <div className = 'image'>
        </div>
        <div className = 'text'>
          <h1>Hi! <br /> <br />I'm Emma</h1>
            <p><a className="cv" href="https://drive.google.com/file/d/1F8Y7RpjrcTxlov_k4Gh3JU1X4KPY7kA4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">VIEW CV<i className="icon-download4" /></a></p>
        </div>
      </div>
    )        
  }
}
