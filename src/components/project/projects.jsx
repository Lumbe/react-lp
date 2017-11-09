import React from 'react'
import ProjectApi from '../../api/projectApi'
import ProjectIndex from './projectIndex'
import FadeTransition from '../common/fade'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      projects: [],
      meta: {}
    }
  }
  componentWillMount() {
    ProjectApi.getAll().then(
      (response) => {
        this.setState({projects: response.data.projects, meta: response.data.meta})
      },
      (error) => {
        console.log('error: ', error)
      }
    )
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <ProjectIndex meta={this.state.meta} projects={this.state.projects}/>
      </FadeTransition>
    )
  }
}

export default Projects