import React from 'react'
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './callbackForm.css'

class CallbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      form: {
        phone: '',
      }
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
    console.log('submit form data from state: ', this.state.form)
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