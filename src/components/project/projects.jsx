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

  loadProjects(params) {
    ProjectApi.getAll(params).then(
      (response) => {
        this.setState({projects: response.data.projects, meta: response.data.meta})
      },
      (error) => {
        console.log('error: ', error)
      }
    )
  }

  componentWillMount() {
    this.loadProjects()
  }
  //   ProjectApi.getAll().then(
  //     (response) => {
  //       this.setState({projects: response.data.projects, meta: response.data.meta})
  //     },
  //     (error) => {
  //       console.log('error: ', error)
  //     }
  //   )
  // }


  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <ProjectIndex meta={this.state.meta} projects={this.state.projects} load={this.loadProjects.bind(this)}/>
      </FadeTransition>
    )
  }
}

export default Projects