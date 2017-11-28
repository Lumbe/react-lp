import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom'
import { Router} from 'react-static';
import 'font-awesome/css/font-awesome.css';
import './css/main.css'
import Routes from './routes'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-109956063-1');

class App extends Component {
  render() {
    return (
      <Router>
        <Routes/>
      </Router>
    );
  }
}

export default App;
