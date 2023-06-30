import React, { Component } from 'react'
import './intro.css'

export default class Introduction extends Component {
  render() {
    return (
        
      <div className = 'whole'>
        <div className = 'image'>
          hi
        </div>
        <div className = 'text'>
          <h1>Hi! <br /> <br />I'm Emma</h1>
            <p><a className="cv" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">VIEW CV<i className="icon-download4" /></a></p>
        </div>
      </div>
                   
    )
  }
}