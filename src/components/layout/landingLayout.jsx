import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import Header from './header/header'
import {setWindowHeight,resetWindowHeight} from "../common/main";
import StaticFrame from "../common/staticFrame";
import VerticalMenu from "./navigation/verticalMenu";
import _ from 'lodash'
import Helmet from 'react-helmet'
import {removeBackgroundImage} from '../common/main'

class LandingLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      landing: true,
      pages: {
        1: '',
        2: 'main',
        3: 'about',
        4: 'commercial-buildings',
        5: 'eu-certificates',
        6: 'building-technology',
        7: 'build-stages',
        8: 'rapid-building',
        9: 'house-projects',
        10: 'advantages',
        11: 'price',
        12: 'reviews',
        13: 'own-project',
        14: 'contacts'
      }

    }
  }

  componentDidMount() {
    document.body.classList.add('landing-section');
    setWindowHeight();
    window.onresize = setWindowHeight;
    window.onwheel = _.throttle((e) => {
      const pageId = Object.values(this.state.pages).findIndex((path) => '/' + path === this.props.path) + 1;
      if (e.wheelDelta > 0) {
        let scrollToId = pageId - 1;
        this.goToPage(scrollToId);
      } else {
        let scrollToId = pageId + 1;
        this.goToPage(scrollToId);
      }
    }, 1000, { 'trailing': false });
  }

  componentWillUnmount() {
    document.body.classList.remove('landing-section');
    resetWindowHeight();
    removeBackgroundImage();
    window.onresize = null;
    window.onwheel = null;
  }

  goToPage(pageId) {
    if (pageId > 0 && pageId < 15) {
      let renderPath = "/" + this.state.pages[pageId];
      this.props.history.push(renderPath);
    }
  }

  nextPage() {
    const pageId = Object.values(this.state.pages).findIndex((path) => '/' + path === this.props.path) + 2;
    this.goToPage(pageId);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={matchProps => (
        <div id="landing-section">
          <Helmet
            defaultTitle="Строительство домов и коттеджей под ключ"
            titleTemplate="%s - Сервус Винница"
          >
            <meta name="theme-color" content="#58b749" />
          </Helmet>
          <Header inverse={this.props.inverse}/>
          <StaticFrame/>
          <VerticalMenu/>
          <Component goToPage={this.goToPage.bind(this)} nextPage={this.nextPage.bind(this)} {...matchProps} />
        </div>
      )} />
    )
  }
}

export default withRouter(LandingLayout)
