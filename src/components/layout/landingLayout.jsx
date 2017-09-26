import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'
import Page from './page'
import VerticalMenu from './navigation/verticalMenu'
import StaticFrame from "../common/staticFrame";

class LandingLayout extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = this.defaultProps();
  // }
  //
  // defaultProps() {
  //   return {
  //     landing: true
  //   }
  // }

  componentWillMount() {
    document.body.classList.add('landing-section');
  }

  componentWillUnmount() {
    document.body.classList.remove('landing-section');
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header inverse={this.props.inverse}/>
        <Page>
          <StaticFrame/>
          <VerticalMenu/>
          <Component {...matchProps} />
        </Page>
      </div>
    )} />
  }
}

export default LandingLayout
