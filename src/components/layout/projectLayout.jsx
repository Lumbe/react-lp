import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/header'
import Helmet from 'react-helmet'
import DefaultFooter from './footer/defaultFooter'

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
        <Helmet
          titleTemplate="%s - Сервус Винница"
        >
          <meta name="theme-color" content="#58b749" />
        </Helmet>
        <Header inverse={this.props.inverse}/>
        <Component {...matchProps} />
        <DefaultFooter/>
      </div>
    )} />
  }
}

export default ProjectLayout
