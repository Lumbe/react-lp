import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'
import Page from './page'

class ProjectLayout extends React.Component {
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
    document.body.classList.add('projects');
  }

  componentWillUnmount() {
    document.body.classList.remove('projects');
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header inverse={this.props.inverse}/>
        <Page>
          <Component {...matchProps} />
        </Page>
      </div>
    )} />
  }
}

export default ProjectLayout
