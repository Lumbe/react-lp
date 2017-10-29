import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import Header from './header/header'
import {setWindowHeight,resetWindowHeight} from "../common/main";

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
        2: '2-page',
        3: '3-page',
        4: '4-page',
        5: '5-page',
        6: '6-page',
        7: '7-page',
        8: '8-page',
        9: '9-page',
        10: '10-page',
        11: '11-page',
        12: '12-page',
        13: '13-page'
      }

    }
  }

  componentDidMount() {
    document.body.classList.add('landing-section');
    setWindowHeight();
    window.onresize = setWindowHeight;

  }

  componentWillUnmount() {
    document.body.classList.remove('landing-section');
    resetWindowHeight();
    window.onresize = null;
    window.onwheel = null;
  }

  goToPage(pageId) {
    if (pageId > 0 && pageId < 14) {
      let renderPath = "/" + this.state.pages[pageId];
      this.props.history.push(renderPath);
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={matchProps => (
        <div id="landing-section">
          <Header inverse={this.props.inverse}/>
          <Component goToPage={this.goToPage.bind(this)} {...matchProps} />
        </div>
      )} />
    )
  }
}

export default withRouter(LandingLayout)
