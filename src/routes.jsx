import React from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
// import asyncComponent from "./components/asyncComponent";
import MyLoadable from './components/common/myLoadable';
import LandingLayout from './components/layout/landingLayout'

const AsyncFirstPage = MyLoadable({ loader: () => import('./components/firstPage/firstPage') });
const AsyncSecondPage = MyLoadable({ loader: () => import('./components/secondPage/secondPage') });
const AsyncNotFound = MyLoadable({ loader: () => import('./components/error/notFound') });

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
