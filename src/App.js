import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './components/common/customBootstrapStyles'
import 'font-awesome/css/font-awesome.css';
import './css/main.css'
import Routes from './routes'
import {gaInit, fbInit} from './components/common/analytics/analytics'

gaInit();
fbInit();

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
