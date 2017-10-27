import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
// import logo from './logo.svg';
// import './css/customBootstrap.css'
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css'
import Routes from './routes'
// import 'jquery/dist/jquery.min.js'

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
