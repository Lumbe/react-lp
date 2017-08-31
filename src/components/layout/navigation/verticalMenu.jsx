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
          <strong>Энергосберегающий</strong> маза фака!
        </Popover>
    );
    return (
          <Nav className="vertical-menu pull-right">
            <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={popoverHoverFocus}>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}/>
              </IndexLinkContainer>
            </OverlayTrigger>
            <LinkContainer to="/2-page">
              <NavItem eventKey={2}></NavItem>
            </LinkContainer>
            <LinkContainer to="/components">
              <NavItem eventKey={3}></NavItem>
            </LinkContainer>
            <LinkContainer to="/components">
              <NavItem eventKey={4}></NavItem>
            </LinkContainer>
            <LinkContainer to="/components">
              <NavItem eventKey={5}></NavItem>
            </LinkContainer>
            <LinkContainer to="/components">
              <NavItem eventKey={6}></NavItem>
            </LinkContainer>
          </Nav>
    )
  }
}

export default VerticalMenu
