import React, { Component } from 'react';

import Header from "./components/Header"
import Choose from "./components/Choose"


//import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Choose />
      </div>

    )
  }
}

export default App;
