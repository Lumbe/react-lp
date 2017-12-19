import React from 'react'
import {FormGroup, InputGroup, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './callbackForm.css'
import CallbackFormApi from '../../../api/callbackFormApi'
import ReactGA from 'react-ga'
import gaException from '../../common/analytics/gaException'
import InputMask from 'react-input-mask';

class CallbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      form: {
        phone: '',
        url: ''
      },
      errors: {
        phone: null
      },
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
    CallbackFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors, sending: false})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'Callback', action: "Submitted Form 'Получить консультацию'"});
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
      <form className="callback-form form-light">
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
              disabled={this.state.sending}
            />
          </InputGroup>
          {this.state.errors.phone &&
          <p className="form-error">{this.state.errors.phone}</p>
          }
        </FormGroup>
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
    )
  }
}

export default CallbackForm