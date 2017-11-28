import React from 'react'
import { Switch } from 'react-static'
// import {Switch} from 'react-router-dom'
// import MyLoadable from './components/common/myLoadable';
// import {TransitionGroup} from 'react-transition-group'
import LandingLayout from './components/layout/landingLayout'
import ProjectLayout from './components/layout/projectLayout'
import FirstPage from './components/sections/firstPage/firstPage';
import SecondPage from './components/sections/secondPage/secondPage';
import ThirdPage from './components/sections/thirdPage/thirdPage';
import FourthPage from './components/sections/fourthPage/fourthPage';
import FifthPage from './components/sections/fifthPage/fifthPage';
import SixthPage from './components/sections/sixthPage/sixthPage';
import SeventhPage from './components/sections/seventhPage/seventhPage';
import EighthPage from './components/sections/eighthPage/eighthPage';
import NinthPage from './components/sections/ninthPage/ninthPage';
import TenthPage from './components/sections/tenthPage/tenthPage';
import EleventhPage from './components/sections/eleventhPage/eleventhPage';
import TwelfthPage from './components/sections/twelfthPage/twelfthPage';
import ThirteenthPage from './components/sections/thirteenthPage/thirteenthPage';
import Projects from './components/project/projects';
import ProjectPage from './components/project/projectPage';
import Typography from './components/common/typography';
import NotFound from './components/error/notFound';

// const AsyncLandingLayout = MyLoadable({ loader: () => import('./components/layout/landingLayout') });
// const AsyncProjectLayout = MyLoadable({ loader: () => import('./components/layout/projectLayout') });

// const AsyncFirstPage = MyLoadable({ loader: () => import('./components/sections/firstPage/firstPage') });
// const AsyncSecondPage = MyLoadable({ loader: () => import('./components/sections/secondPage/secondPage') });
// const AsyncThirdPage = MyLoadable({ loader: () => import('./components/sections/thirdPage/thirdPage') });
// const AsyncFourthPage = MyLoadable({ loader: () => import('./components/sections/fourthPage/fourthPage') });
// const AsyncFifthPage = MyLoadable({ loader: () => import('./components/sections/fifthPage/fifthPage') });
// const AsyncSixthPage = MyLoadable({ loader: () => import('./components/sections/sixthPage/sixthPage') });
// const AsyncSeventhPage = MyLoadable({ loader: () => import('./components/sections/seventhPage/seventhPage') });
// const AsyncEighthPage = MyLoadable({ loader: () => import('./components/sections/eighthPage/eighthPage') });
// const AsyncNinthPage = MyLoadable({ loader: () => import('./components/sections/ninthPage/ninthPage') });
// const AsyncTenthPage = MyLoadable({ loader: () => import('./components/sections/tenthPage/tenthPage') });
// const AsyncEleventhPage = MyLoadable({ loader: () => import('./components/sections/eleventhPage/eleventhPage') });
// const AsyncTwelfthPage = MyLoadable({ loader: () => import('./components/sections/twelfthPage/twelfthPage') });
// const AsyncThirteenthPage = MyLoadable({ loader: () => import('./components/sections/thirteenthPage/thirteenthPage') });
// const AsyncProjects = MyLoadable({ loader: () => import('./components/project/projects') });
// const AsyncProjectPage = MyLoadable({ loader: () => import('./components/project/projectPage') });
//
// const AsyncTypography = MyLoadable({ loader: () => import('./components/common/typography') });
// const AsyncNotFound = MyLoadable({ loader: () => import('./components/error/notFound') });
//
class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <LandingLayout exact path="/" inverse={true} component={FirstPage}/>
        <LandingLayout exact path="/about" inverse={false} component={SecondPage}/>
        <LandingLayout exact path="/commercial-buildings" inverse={false} component={ThirdPage}/>
        <LandingLayout exact path="/eu-certificates" inverse={true} component={FourthPage}/>
        <LandingLayout exact path="/building-technology" inverse={false} component={FifthPage}/>
        <LandingLayout exact path="/build-stages" inverse={true} component={SixthPage}/>
        <LandingLayout exact path="/rapid-building" inverse={false} component={SeventhPage}/>
        <LandingLayout exact path="/house-projects" inverse={true} component={EighthPage}/>
        <LandingLayout exact path="/advantages" inverse={false} component={NinthPage}/>
        <LandingLayout exact path="/price" inverse={true} component={TenthPage}/>
        <LandingLayout exact path="/reviews" inverse={false} component={EleventhPage}/>
        <LandingLayout exact path="/own-project" inverse={true} component={TwelfthPage}/>
        <LandingLayout exact path="/contacts" inverse={false} component={ThirteenthPage}/>
        <ProjectLayout exact path="/projects/:slug" inverse={false} component={ProjectPage}/>
        <ProjectLayout exact path="/projects" inverse={true} component={Projects}/>
        <LandingLayout exact path="/typography" inverse={false} component={Typography}/>
        <LandingLayout inverse={false} component={NotFound}/>
      </Switch>
    )
  }
}

export default Routes
