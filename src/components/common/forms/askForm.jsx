import React from 'react'
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './askForm.css'

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      title: 'Форма',
      form: {
        firstName: '',
        phone: '',
        email: '',
        comment: ''
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
      <form className="ask-form form-light">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon className="input-icon">
              <FontAwesome name="user" fixedWidth/>
            </InputGroup.Addon>
            <FormControl
              name="firstName"
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
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon className="input-icon">
              <FontAwesome name="commenting-o" fixedWidth/>
            </InputGroup.Addon>
            <FormControl
              name="comment"
              componentClass="textarea"
              className="input-textfield"
              placeholder="Доп. информация"
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.updateFormState.bind(this)}
            />
          </InputGroup>
        </FormGroup>
        <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
      </form>
    )
  }
}

export default AskForm