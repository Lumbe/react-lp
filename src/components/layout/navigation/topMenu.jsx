import React from 'react'
import './topMenu.css'
import {Navbar, Nav, NavItem, Image, ButtonToolbar, Button} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import DefaultModal from '../../common/defaultModal'
import PriceForm from '../../common/forms/priceForm'
import logoImage from './logo.png'

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      inverse: false,
      showModal: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false})
  }


  render() {
    return (
        <Navbar className='flex-navbar' collapseOnSelect inverse={this.props.inverse}>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logoImage} draggable="false" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Главная</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/building-technology">
                <NavItem eventKey={2}>Технологии</NavItem>
              </LinkContainer>
              <LinkContainer to="/price">
                <NavItem eventKey={3}>Стоимость</NavItem>
              </LinkContainer>
              <LinkContainer to="/projects">
                <NavItem eventKey={4}>Проекты</NavItem>
              </LinkContainer>
              <LinkContainer to="/reviews">
                <NavItem eventKey={5}>Отзывы</NavItem>
              </LinkContainer>
              <LinkContainer to="/contacts">
                <NavItem eventKey={6}>Контакты</NavItem>
              </LinkContainer>
            </Nav>
            <ButtonToolbar className="pull-right-lg">
              <Button
                bsStyle="green"
                className="btn-header"
                onClick={this.openModal.bind(this)}
              >
                Заказать просчет
              </Button>
            </ButtonToolbar>
          </Navbar.Collapse>
          <DefaultModal
            show={this.state.showModal}
            onHide={this.closeModal.bind(this)}
            title="Узнать стоимость строительства дома Сервус"
          >
            <PriceForm/>
          </DefaultModal>
        </Navbar>
    )
  }
}

export default TopMenu
