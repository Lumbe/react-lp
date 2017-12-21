import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import './owl.theme.projects.css'
import ProjectDescription from './projectDescription'
import {Button} from 'react-bootstrap'

class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  render() {
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    let projects = this.props.projects || this.state.projects;
    const footer = <Button bsStyle="link" className="btn-yellow">
      Смотреть планировку
    </Button>;
    let items =[];
    projects.map((project, index) => {
      return items.push(<ProjectDescription key={index} footer={footer} project={project}/>);
    });
    return (
      <OwlCarousel
        className="owl-theme-projects"
        items={1}
        margin={10}
        loop
        nav={true}
        navText={[iconLeft, iconRight]}
        smartSpeed={600}
      >{items}</OwlCarousel>
    )
  }

}

export default ProjectsSlider