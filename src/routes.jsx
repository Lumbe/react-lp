import React from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
// import asyncComponent from "./components/asyncComponent";
import MyLoadable from './components/common/myLoadable';
import LandingLayout from './components/layout/landingLayout'

const AsyncFirstPage = MyLoadable({ loader: () => import('./components/firstPage/firstPage') });
const AsyncSecondPage = MyLoadable({ loader: () => import('./components/secondPage/secondPage') });
const AsyncThirdPage = MyLoadable({ loader: () => import('./components/thirdPage/thirdPage') });
const AsyncFourthPage = MyLoadable({ loader: () => import('./components/fourthPage/fourthPage') });
const AsyncFifthPage = MyLoadable({ loader: () => import('./components/fifthPage/fifthPage') });
const AsyncSixthPage = MyLoadable({ loader: () => import('./components/sixthPage/sixthPage') });
const AsyncSeventhPage = MyLoadable({ loader: () => import('./components/seventhPage/seventhPage') });

const AsyncTypography = MyLoadable({ loader: () => import('./components/common/typography') });
const AsyncNotFound = MyLoadable({ loader: () => import('./components/error/notFound') });

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LandingLayout exact path="/" inverse={true} component={AsyncFirstPage}/>
          <LandingLayout exact path="/2-page" inverse={false} component={AsyncSecondPage}/>
          <LandingLayout exact path="/3-page" inverse={false} component={AsyncThirdPage}/>
          <LandingLayout exact path="/4-page" inverse={true} component={AsyncFourthPage}/>
          <LandingLayout exact path="/5-page" inverse={false} component={AsyncFifthPage}/>
          <LandingLayout exact path="/6-page" inverse={true} component={AsyncSixthPage}/>
          <LandingLayout exact path="/7-page" inverse={false} component={AsyncSeventhPage}/>
          <LandingLayout exact path="/typography" inverse={false} component={AsyncTypography}/>
          <LandingLayout inverse={false} component={AsyncNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
