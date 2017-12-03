import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css';
import './css/main.css'
import Routes from './routes'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-109956063-1');

// (() => import('./css/main.css'))();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}

export default App;
