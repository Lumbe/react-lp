import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import LandingLayout from './components/layout/landingLayout'
import FirstPage from './components/firstPage/firstPage'
import SecondPage from './components/secondPage/secondPage'
import NotFound from './components/error/notFound'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LandingLayout exact path="/" component={FirstPage}/>
          <LandingLayout exact path="/2-page" component={SecondPage}/>
          <LandingLayout component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
