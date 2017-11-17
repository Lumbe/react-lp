import React from 'react'
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './askForm.css'
import ContactFormApi from '../../../api/contactFormApi'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../fade'

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
      animateIn: true
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
    ContactFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          return this.setState({errors: response.data.errors})
        }
        if (response.data.sent) {
          this.setState({animateIn: false});
          setTimeout(() => {
            this.props.toggleFormSubmission()
          }, 800);
        }
      },
      (error) => {
        console.log('error: ', error)
      }
    )
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
                <FormControl
                  name="phone"
                  type="tel"
                  className="input-textfield"
                  placeholder="Ваш телефон"
                  onFocus={this.handleFocus.bind(this)}
                  onBlur={this.handleBlur.bind(this)}
                  onChange={this.updateFormState.bind(this)}
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
            <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
          </form>
        </FadeTransition>
      </TransitionGroup>
    )
  }
}

export default AskForm