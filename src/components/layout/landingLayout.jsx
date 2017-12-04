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
        2: 'about',
        3: 'commercial-buildings',
        4: 'eu-certificates',
        5: 'building-technology',
        6: 'build-stages',
        7: 'rapid-building',
        8: 'house-projects',
        9: 'advantages',
        10: 'price',
        11: 'reviews',
        12: 'own-project',
        13: 'contacts'
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
    if (pageId > 0 && pageId < 14) {
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
            defaultTitle="Строительство домов и коттеджей под ключ - Сервус Винница"
            titleTemplate="%s - cтроительная компания Сервус Винница"
          />
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
