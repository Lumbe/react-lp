import React from 'react'
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './callbackForm.css'
import CallbackFormApi from '../../../api/callbackFormApi'

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
      }
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
    CallbackFormApi.create(this.state.form).then(
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
      <form className="callback-form form-light">
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
        </FormGroup>
        <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Узнать стоимость</Button>
      </form>
    )
  }
}

export default CallbackForm