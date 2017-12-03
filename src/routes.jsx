import React from 'react'
import {Switch} from 'react-router-dom'
import MyLoadable from './components/common/myLoadable';
import LandingLayout from './components/layout/landingLayout'
import ProjectLayout from './components/layout/projectLayout'
import {TransitionGroup} from 'react-transition-group'

// const AsyncLandingLayout = MyLoadable({ loader: () => import('./components/layout/landingLayout') });
// const AsyncProjectLayout = MyLoadable({ loader: () => import('./components/layout/projectLayout') });

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
const AsyncProjects = MyLoadable({ loader: () => import('./components/project/projects') });
const AsyncProjectPage = MyLoadable({ loader: () => import('./components/project/projectPage') });
const AsyncNewYearAction = MyLoadable({ loader: () => import('./components/pages/newYearAction') });

const AsyncTypography = MyLoadable({ loader: () => import('./components/common/typography') });
const AsyncNotFound = MyLoadable({ loader: () => import('./components/error/notFound') });

class Routes extends React.Component {

  render() {
    return (
      <TransitionGroup>
        <Switch>
          <LandingLayout exact path="/" inverse={true} component={AsyncFirstPage}/>
          <LandingLayout exact path="/about" inverse={false} component={AsyncSecondPage}/>
          <LandingLayout exact path="/commercial-buildings" inverse={false} component={AsyncThirdPage}/>
          <LandingLayout exact path="/eu-certificates" inverse={true} component={AsyncFourthPage}/>
          <LandingLayout exact path="/building-technology" inverse={false} component={AsyncFifthPage}/>
          <LandingLayout exact path="/build-stages" inverse={true} component={AsyncSixthPage}/>
          <LandingLayout exact path="/rapid-building" inverse={false} component={AsyncSeventhPage}/>
          <LandingLayout exact path="/house-projects" inverse={true} component={AsyncEighthPage}/>
          <LandingLayout exact path="/advantages" inverse={false} component={AsyncNinthPage}/>
          <LandingLayout exact path="/price" inverse={true} component={AsyncTenthPage}/>
          <LandingLayout exact path="/reviews" inverse={false} component={AsyncEleventhPage}/>
          <LandingLayout exact path="/own-project" inverse={true} component={AsyncTwelfthPage}/>
          <LandingLayout exact path="/contacts" inverse={false} component={AsyncThirteenthPage}/>
          <ProjectLayout exact path="/projects/:slug" inverse={false} component={AsyncProjectPage}/>
          <ProjectLayout exact path="/projects" inverse={true} component={AsyncProjects}/>
          <LandingLayout exact path="/typography" inverse={false} component={AsyncTypography}/>
          <ProjectLayout exact path="/new-year-action" inverse={false} component={AsyncNewYearAction}/>

          <LandingLayout inverse={false} component={AsyncNotFound}/>
        </Switch>
      </TransitionGroup>
    )
  }
}

export default Routes
