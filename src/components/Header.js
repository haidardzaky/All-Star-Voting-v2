import React, { Component } from "react"
import './Header.css'
import mainLogo from './NBA_AllStar_LA.png'

export default class HeaderApps extends Component {
  render() {
    return(<div className="App">
      <div className="App-header">
        <div>
          <img src={mainLogo} alt="nba-allstar"/>
        </div>
        <div>
          <div class="ui huge yellow header">All-Star 2018 Voting</div>
          <p>Los Angeles, February 18 2018</p>
        </div>
      </div>)
  }
}
