import React from 'react'
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './askForm.css'
import ContactFormApi from '../../../api/contactFormApi'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../fade'
import ReactGA from 'react-ga'
import gaException from '../../common/analytics/gaException'
import InputMask from 'react-input-mask'

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      title: 'Форма',
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
        url: ''
      },
      errors: {
        email: null,
        phone: null,
        message: null
      },
      animateIn: true,
      sending: false
    }
  }

  componentDidMount() {
    this.setState({form: {url: window.location.href}})
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
    ContactFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors, sending: false})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'Questions', action: "submitForm", label: 'Contacts Page', value: 1});
          this.setState({animateIn: false});
          setTimeout(() => {
            this.finishFormSubmission()
          }, 800);
        }
      },
      (error) => {
        this.setState({sending: false});
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
          <form className="ask-form form-light">
            <fieldset disabled={this.state.sending}>
              <FormGroup>
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
              </FormGroup>
              <FormGroup>
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
                {this.state.errors.phone &&
                  <p className="form-error">{this.state.errors.phone}</p>
                }
              </FormGroup>
              <FormGroup>
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
                {this.state.errors.email &&
                <p className="form-error">{this.state.errors.email}</p>
                }
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon className="input-icon">
                    <FontAwesome name="commenting-o" fixedWidth/>
                  </InputGroup.Addon>
                  <FormControl
                    name="message"
                    componentClass="textarea"
                    className="input-textfield"
                    placeholder="Доп. информация"
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.updateFormState.bind(this)}
                  />
                </InputGroup>
                {this.state.errors.message &&
                  <p className="form-error">{this.state.errors.message}</p>
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
                'Отправить'
              }
            </Button>
          </form>
        </FadeTransition>
      </TransitionGroup>
    )
  }
}

export default AskForm