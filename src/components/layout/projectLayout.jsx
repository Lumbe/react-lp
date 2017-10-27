import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'

class ProjectLayout extends React.Component {
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
        <Component {...matchProps} />
      </div>
    )} />
  }
}

export default ProjectLayout
