import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './components/common/customBootstrapStyles'
import 'font-awesome/css/font-awesome.css';
import './css/main.css'
import Routes from './routes'
import {gaInit, fbInit} from './components/common/analytics/analytics'
import Loadable from 'react-loadable'

gaInit();
fbInit();

class App extends Component {
  componentDidMount() {
    setTimeout(() => {Loadable.preloadAll()}, 4000)
  }

  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}

export default App;
