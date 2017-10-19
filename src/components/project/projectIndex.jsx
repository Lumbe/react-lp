import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './catalog-header.jpg'
import './projectIndex.css'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark"
    }
  }

  componentDidMount() {
    setBackgroundImage(backgroundImage, true);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <div className="project-index">
        <div className="menu-divider"/>
        <h1 className="title">Проекты домов и коттеджей</h1>
        <p className="text-center description">Типовые проекты частных домов от компании Сервус</p>
      </div>
    )
  }
}

export default ProjectIndex