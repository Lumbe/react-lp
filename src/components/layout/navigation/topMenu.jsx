import React from 'react'
import './topMenu.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar>
          <Nav>
            <IndexLinkContainer className="custom-nav-link" to="/">
              <NavItem eventKey={1}>Главная</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/2-page">
              <NavItem eventKey={2}>Технологии</NavItem>
            </LinkContainer>
            <LinkContainer to="/3-page">
              <NavItem eventKey={3}>Стоимость</NavItem>
            </LinkContainer>
            <Navbar.Brand>
              <a>React-Bootstrap</a>
            </Navbar.Brand>
            <LinkContainer to="/4-page">
              <NavItem eventKey={4}>Проекты</NavItem>
            </LinkContainer>
            <LinkContainer to="/5-page">
              <NavItem eventKey={5}>Портфолио</NavItem>
            </LinkContainer>
            <LinkContainer to="/6-page">
              <NavItem eventKey={6}>Контакты</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
    )
  }
}

export default TopMenu
