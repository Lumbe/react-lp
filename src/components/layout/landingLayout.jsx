import React from 'react'
// import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Header from './header/header'
import Page from './page'
// import Footer from './footer'

class LandingLayout extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header/>
        <Page/>
          <Component {...matchProps} />
        <Page/>
      </div>
    )} />
  }
}

export default LandingLayout
