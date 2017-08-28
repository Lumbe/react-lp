import React from 'react'
import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import './topMenu.css'
import {Link} from 'react-router-dom'

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
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem className='custom-nav-link'>
              <NavLink tag={Link} to="/" active>Главная</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/2-page" >Технологии</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/components/">Стоимость</NavLink>
            </NavItem>
            <NavbarBrand tag={Link} to="/">Сервус Винница</NavbarBrand>
            <NavItem>
              <NavLink tag={Link} to="/components/">Проекты</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/components/">Портфолио</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/components/">Контакты</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default TopMenu
