import React from 'react'
import './verticalMenu.css'
import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import {Popover, OverlayTrigger} from 'react-bootstrap'

class VerticalMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeKey: 1
  //   };
  // }

  // handleSelect(selectedKey) {
  //   this.setState({
  //     activeKey: selectedKey
  //   });
  // }

  render() {
    const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus" title="Дом под ключ за 3 месяца">
          <strong>Энергосберегающий</strong> очень!
        </Popover>
    );
    return (
          <Nav className="vertical-menu pull-right  hidden-xs hidden-sm">
            <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popoverHoverFocus}>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>
                  <div className="inner-dot"/>
                </NavItem>
              </IndexLinkContainer>
            </OverlayTrigger>
            <LinkContainer to="/2-page">
              <NavItem eventKey={2}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/3-page">
              <NavItem eventKey={3}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/4-page">
              <NavItem eventKey={4}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/5-page">
              <NavItem eventKey={5}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/6-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/7-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/8-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/9-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/10-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/11-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/12-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/13-page">
              <NavItem eventKey={6}>
                <div className="inner-dot"/>
              </NavItem>
            </LinkContainer>

          </Nav>
    )
  }
}

export default VerticalMenu
