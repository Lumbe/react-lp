import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './bg-screen1.jpg'
import './firstPage.css'
import {Nav, NavItem, Col} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";

class FirstPage extends React.Component {
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
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
    removeBackgroundImage();
    removeDarkColorScheme();
  }
  render() {
    return (
      <Col md={12}>
        <div className="text-center heading-block">
          <div className='background-square'>
            <div className="frame"/>
          </div>
          <div className=" heading-text">
            <h3 className="hidden-xs"><span className="text-highlight">Строим по Европейским стандартам</span></h3>
            <h1><span className="energy-header">Энергоэфективные</span> <br/>каркасные дома и коттеджи</h1>
            <h3>в Виннице и Винницкой области</h3>
          </div>
        </div>
          <div className="heading-buttons">
            <Nav bsStyle="pills" justified>
              <LinkContainer className="btn-simple" to="/4-page">
                <NavItem eventKey={0.1}>Стоимость</NavItem>
              </LinkContainer>
              <LinkContainer to="/5-page" className="btn-details">
                <NavItem eventKey={0.2}>Подробнее</NavItem>
              </LinkContainer>
              <LinkContainer className="btn-simple" to="/6-page">
                <NavItem eventKey={0.3}>Проекты домов</NavItem>
              </LinkContainer>
            </Nav>
          </div>
      </Col>
    )
  }
}

export default FirstPage
