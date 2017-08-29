import React from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
import asyncComponent from "./components/asyncComponent";
import LandingLayout from './components/layout/landingLayout'

const AsyncFirstPage = asyncComponent(() => import('./components/firstPage/firstPage'));
const AsyncSecondPage = asyncComponent(() => import('./components/secondPage/secondPage'));
const AsyncNotFound = asyncComponent(() => import('./components/error/notFound'));


class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LandingLayout exact path="/" component={AsyncFirstPage}/>
          <LandingLayout exact path="/2-page" component={AsyncSecondPage}/>
          <LandingLayout component={AsyncNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
