import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'
import Page from './page'
import VerticalMenu from './navigation/verticalMenu'
import {setWindowHeight,resetWindowHeight} from "../common/main";
import StaticFrame from "../common/staticFrame"
import {Grid} from 'react-bootstrap'

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
    return <Route {...rest} render={matchProps => (
      <div>
        <Header inverse={this.props.inverse}/>
        <Page>
          <StaticFrame/>
          <VerticalMenu/>
          <Grid>
            <Component {...matchProps} />
          </Grid>
        </Page>
      </div>
    )} />
  }
}

export default LandingLayout
