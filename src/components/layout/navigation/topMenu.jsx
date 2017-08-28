import React from 'react'
import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import './topMenu.css'

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
      <Navbar className="navbar-expand-lg" color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem className='custom-nav-link'>
              <NavLink href="/">Главная</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/2-page">Технологии</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Стоимость</NavLink>
            </NavItem>
            <NavbarBrand href="/">Сервус Винница</NavbarBrand>
            <NavItem>
              <NavLink href="/components/">Проекты</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Портфолио</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Контакты</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default TopMenu
