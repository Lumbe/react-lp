import React from 'react'
import './topMenu.css'
import {Navbar, Nav, NavItem, Image, ButtonToolbar, Button} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import DefaultModal from '../../common/defaultModal'
import PriceForm from '../../common/forms/priceForm'
import logoImage from './logo.png'
import SuccessMessage from '../../common/forms/successMessage'
import ReactGA from 'react-ga'

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      inverse: false,
      showModal: false,
      submitForm: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openModal() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.set({page: window.location.pathname});
      ReactGA.modalview("/header/заказать-расчет");
    } else {
      console.log(`ga tracking: заказать расчет modal opened!`)
    }
  }

  closeModal() {
    this.setState({showModal: false});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
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
                Получить смету
              </Button>
            </ButtonToolbar>
          </Navbar.Collapse>
          <DefaultModal
            show={this.state.showModal}
            onHide={this.closeModal.bind(this)}
            title="Предварительная стоимость строительства дома Сервус"
          >
            {this.state.submitForm ?
              <SuccessMessage closeModal={this.closeModal.bind(this)}/>
              :
              <PriceForm toggleFormSubmission={this.toggleFormSubmission.bind(this)}/>
            }
          </DefaultModal>
        </Navbar>
    )
  }
}

export default TopMenu
