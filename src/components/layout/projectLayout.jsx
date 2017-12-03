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
          defaultTitle="Строительство домов и коттеджей под ключ - Сервус Винница"
          titleTemplate="%s - cтроительная компания Сервус Винница"
        />
        <Header inverse={this.props.inverse}/>
        <Component {...matchProps} />
        <DefaultFooter/>
      </div>
    )} />
  }
}

export default ProjectLayout
