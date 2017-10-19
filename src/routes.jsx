import React from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
// import asyncComponent from "./components/asyncComponent";
import MyLoadable from './components/common/myLoadable';
import LandingLayout from './components/layout/landingLayout'
import ProjectLayout from './components/layout/projectLayout'

const AsyncFirstPage = MyLoadable({ loader: () => import('./components/sections/firstPage/firstPage') });
const AsyncSecondPage = MyLoadable({ loader: () => import('./components/sections/secondPage/secondPage') });
const AsyncThirdPage = MyLoadable({ loader: () => import('./components/sections/thirdPage/thirdPage') });
const AsyncFourthPage = MyLoadable({ loader: () => import('./components/sections/fourthPage/fourthPage') });
const AsyncFifthPage = MyLoadable({ loader: () => import('./components/sections/fifthPage/fifthPage') });
const AsyncSixthPage = MyLoadable({ loader: () => import('./components/sections/sixthPage/sixthPage') });
const AsyncSeventhPage = MyLoadable({ loader: () => import('./components/sections/seventhPage/seventhPage') });
const AsyncEighthPage = MyLoadable({ loader: () => import('./components/sections/eighthPage/eighthPage') });
const AsyncNinthPage = MyLoadable({ loader: () => import('./components/sections/ninthPage/ninthPage') });
const AsyncTenthPage = MyLoadable({ loader: () => import('./components/sections/tenthPage/tenthPage') });
const AsyncEleventhPage = MyLoadable({ loader: () => import('./components/sections/eleventhPage/eleventhPage') });
const AsyncTwelfthPage = MyLoadable({ loader: () => import('./components/sections/twelfthPage/twelfthPage') });
const AsyncThirteenthPage = MyLoadable({ loader: () => import('./components/sections/thirteenthPage/thirteenthPage') });
const AsyncProjectIndex = MyLoadable({ loader: () => import('./components/project/projectIndex') });
const AsyncProjectPage = MyLoadable({ loader: () => import('./components/project/projectPage') });

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
          <LandingLayout exact path="/8-page" inverse={true} component={AsyncEighthPage}/>
          <LandingLayout exact path="/9-page" inverse={false} component={AsyncNinthPage}/>
          <LandingLayout exact path="/10-page" inverse={true} component={AsyncTenthPage}/>
          <LandingLayout exact path="/11-page" inverse={false} component={AsyncEleventhPage}/>
          <LandingLayout exact path="/12-page" inverse={true} component={AsyncTwelfthPage}/>
          <LandingLayout exact path="/13-page" inverse={false} component={AsyncThirteenthPage}/>
          <ProjectLayout exact path="/projects/:slug" inverse={false} component={AsyncProjectPage}/>
          <ProjectLayout exact path="/projects" inverse={true} component={AsyncProjectIndex}/>
          <LandingLayout exact path="/typography" inverse={false} component={AsyncTypography}/>
          <LandingLayout inverse={false} component={AsyncNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
