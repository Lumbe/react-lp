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
      meta: {},
      isFetching: false
    }
  }

  loadProjects(params) {
    this.setState({isFetching: true});
    ProjectApi.getAll(params).then(
      (response) => {
        this.setState({projects: response.data.projects, meta: response.data.meta, isFetching: false})
      },
      (error) => {
        this.setState({isFetching: false});
        console.log('error: ', error)
      }
    )
  }

  componentWillMount() {
    this.loadProjects()
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <ProjectIndex isFetching={this.state.isFetching} meta={this.state.meta} projects={this.state.projects} load={this.loadProjects.bind(this)}/>
      </FadeTransition>
    )
  }
}

export default Projects