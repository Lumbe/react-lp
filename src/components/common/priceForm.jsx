import React from 'react'
import {FormGroup, Row, Col, InputGroup, FormControl, Button, Radio} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './priceForm.css'

class PriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      form: {
        floor: '',
        square: '',
        phone: '',
        email: ''
        // comment: ''
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
      <form className="price-form form-light">
        <FormGroup>
          <Row>
            <p className="text-left p-line">Этажность</p>
            <Col md={6} sm={12} xs={12}>
              <Radio
                name="floor"
                value="1 этаж"
                inline
                hidden
                className={this.state.form.floor === '1 этаж' ? 'btn-radio checked' : 'btn-radio'}
                onClick={this.updateFormState.bind(this)}>
                1 этаж
              </Radio>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Radio
                name="floor"
                value="2 этажа"
                inline
                hidden
                className={this.state.form.floor === '2 этажа' ? 'btn-radio checked' : 'btn-radio'}
                onClick={this.updateFormState.bind(this)}>
                2 этажа
              </Radio>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <p className="text-left p-line">Площадь</p>
            <Col md={4} sm={12} xs={12}>
              <Radio
                name="square"
                value="< 100кв.м."
                inline
                hidden
                className={this.state.form.square === '< 100кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                onClick={this.updateFormState.bind(this)}>
                {'< 100кв.м.'}
              </Radio>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Radio
                name="square"
                value="100-150кв.м."
                inline
                hidden
                className={this.state.form.square === '100-150кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                onClick={this.updateFormState.bind(this)}>
                100-150кв.м.
              </Radio>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Radio
                name="square"
                value="> 150кв.м."
                inline
                hidden
                className={this.state.form.square === '> 150кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                onClick={this.updateFormState.bind(this)}>
                > 150кв.м.
              </Radio>
            </Col>
          </Row>
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
        <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Узнать стоимость</Button>
      </form>
    )
  }
}

export default PriceForm