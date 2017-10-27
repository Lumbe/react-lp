import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'
import {setWindowHeight,resetWindowHeight} from "../common/main";

class LandingLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      landing: true
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
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={matchProps => (
        <div id="landing-section">
          <Header inverse={this.props.inverse}/>
          <Component {...matchProps} />
        </div>
      )} />
    )
  }
}

export default LandingLayout
