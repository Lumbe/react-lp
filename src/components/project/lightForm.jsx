import React from 'react'
import {FormGroup, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import CallbackForm from "../common/forms/callbackForm";
import DefaultModal from "../common/defaultModal";
import SuccessMessage from '../common/forms/successMessage'
import ProjectPriceFormApi from '../../api/projectPriceFormApi'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../common/fade'
import ReactGA from 'react-ga'
import gaException from '../common/analytics/gaException'
import InputMask from 'react-input-mask'

class LightFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      showModal: false,
      title: 'Форма',
      form: {
        name: '',
        phone: '',
        email: '',
        projectTitle: '',
        projectArea: '',
        url: ''
      },
      errors: {
        email: null,
        phone: null
      },
      animateIn: true,
      submitForm: false,
      sending: false
    }
  }

  componentDidMount() {
    this.setState({form: {url: window.location.href}})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectTitle && nextProps.projectArea) {
      let form = this.state.form;
      form['projectTitle'] = nextProps.projectTitle;
      form['projectArea'] = nextProps.projectArea;
      this.setState({form: form});
    }
  }

  openModal() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview("/projects/:slug/projectPriceForm-callback");
    } else {
      console.log(`ga tracking: projectPriceForm-callback modal opened!`)
    }
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
  }

  closeModal() {
    this.setState({showModal: false});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    const form = this.state.form;
    form[field] = event.target.value;
    this.setState({form: form});
  }

  submitForm(event) {
    (event).preventDefault();
    this.setState({sending: true});
    ProjectPriceFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors, sending: false})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'HouseProjectPrice', action: "submitForm", label: 'Projects Catalogue', value: 1});
          this.setState({animateIn: false});
          setTimeout(() => {
            this.finishFormSubmission()
          }, 800);
        }
      },
      (error) => {
        this.setState({sending: false})
        console.log('error: ', error)
      }
    )
  }

  finishFormSubmission() {
    this.setState({sending: false});
    this.props.toggleFormSubmission();
  }

  handleFocus(e) {
    let addon = e.target.previousElementSibling || e.target.nextSibling;
    if (addon) {
      return addon.style.borderColor = '#52ad44';
    }
  }

  handleBlur(e) {
    let addon = e.target.previousElementSibling || e.target.nextSibling;
    if (addon) {
      return addon.style.borderColor = '#cccccc';
    }
  }

  render() {
    return (
      <TransitionGroup>
        <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
          <div className="light-form-wrapper">
            <div className="form-badge">Бесплатно</div>
            <h4 className="text-center title">
              {this.props.title || this.state.title}
            </h4>
            <form className="form-light">
              <fieldset disabled={this.state.sending}>
                <FormGroup>
                  <Row>
                    <Col md={12}>
                      <InputGroup>
                        <InputGroup.Addon className="input-icon">
                          <FontAwesome name="user" fixedWidth/>
                        </InputGroup.Addon>
                        <FormControl
                          name="name"
                          type="text"
                          className="input-textfield"
                          placeholder="Ваше имя"
                          onFocus={this.handleFocus.bind(this)}
                          onBlur={this.handleBlur.bind(this)}
                          onChange={this.updateFormState.bind(this)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md={12}>
                      <InputGroup>
                        <InputGroup.Addon className="input-icon">
                          <FontAwesome name="phone" fixedWidth/>
                        </InputGroup.Addon>
                        <InputMask
                          name="phone"
                          type="tel"
                          className="input-textfield form-control"
                          placeholder="Ваш телефон"
                          onFocus={this.handleFocus.bind(this)}
                          onBlur={this.handleBlur.bind(this)}
                          onChange={this.updateFormState.bind(this)}
                          mask="+38 (099) 999-99-99"
                        />
                      </InputGroup>

                    </Col>
                  </Row>
                  {this.state.errors.phone &&
                  <p className="form-error">{this.state.errors.phone}</p>
                  }
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md={12}>
                      <InputGroup>
                        <InputGroup.Addon className="input-icon">
                          <FontAwesome name="envelope" fixedWidth/>
                        </InputGroup.Addon>
                        <FormControl
                          name="email"
                          type="email"
                          className="input-textfield"
                          placeholder="Ваш e-mail"
                          onFocus={this.handleFocus.bind(this)}
                          onBlur={this.handleBlur.bind(this)}
                          onChange={this.updateFormState.bind(this)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  {this.state.errors.email &&
                  <p className="form-error">{this.state.errors.email}</p>
                  }
                </FormGroup>
              </fieldset>
              <Button
                onClick={this.submitForm.bind(this)}
                bsSize="large"
                bsStyle="green"
                block
                disabled={this.state.sending}
              >
                {this.state.sending ?
                  <span>Отправляем <FontAwesome name="spinner" spin/></span>
                  :
                  'Узнать стоимость'
                }
              </Button>
            </form>
            или звоните
            <div className="phone-number"><h4><span>+38 (096)</span> 888 50 50</h4></div>
            <Button bsStyle="grey" onClick={this.openModal.bind(this)}>Обратный звонок</Button>
            <DefaultModal
              show={this.state.showModal}
              onHide={this.closeModal.bind(this)}
              title="Получить консультацию"
            >
              {this.state.submitForm ?

                <SuccessMessage closeModal={this.closeModal.bind(this)}/>
                :
                <CallbackForm toggleFormSubmission={this.toggleFormSubmission.bind(this)}/>
              }
            </DefaultModal>
          </div>
        </FadeTransition>
      </TransitionGroup>
    )
  }
}

export default LightFrom