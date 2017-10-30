import React from 'react'
import './verticalMenu.css'
import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

class VerticalMenu extends React.Component {

  render() {
    return (
          <Nav className="vertical-menu pull-right  hidden-xs hidden-sm">
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>
                <div className="inner-dot"/>
              </NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/commercial-buildings">
              <NavItem eventKey={3}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/eu-certificates">
              <NavItem eventKey={4}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/building-technology">
              <NavItem eventKey={5}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/build-stages">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/rapid-building">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/house-projects">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/advantages">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/price">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/reviews">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/own-project">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
          </Nav>
    )
  }
}

export default VerticalMenu
