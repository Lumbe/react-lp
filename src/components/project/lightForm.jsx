import React from 'react'
import {FormGroup, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class LightFrom extends React.Component {
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
        file: ''
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
      return addon.style.borderColor = '#d2d7e0';
    }
  }

  render() {
    return (
      <div className="light-form-wrapper">
        <div className="form-badge">Бесплатно</div>
        <h4 className="text-center title">
          {this.props.title || this.state.title}
        </h4>
        <form className="price-form">
          <FormGroup>
            <Row>
              <Col md={12}>
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
              </Col>
            </Row>
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
          </FormGroup>
          {/*<FormGroup>*/}
            {/*<Row>*/}
              {/*<InputGroup>*/}
                {/*<InputGroup.Addon className="input-icon">*/}
                  {/*<FontAwesome name="commenting-o" fixedWidth/>*/}
                {/*</InputGroup.Addon>*/}
                {/*<FormControl*/}
                  {/*name="comment"*/}
                  {/*componentClass="textarea"*/}
                  {/*className="input-textfield"*/}
                  {/*placeholder="Доп. информация"*/}
                  {/*onFocus={this.handleFocus.bind(this)}*/}
                  {/*onBlur={this.handleBlur.bind(this)}*/}
                  {/*onChange={this.updateFormState.bind(this)}*/}
                {/*/>*/}
              {/*</InputGroup>*/}
            {/*</Row>*/}
          {/*</FormGroup>*/}
          <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
        </form>
        или звоните
        <div className="phone-number"><h4><span>+38 (096)</span> 888 50 50</h4></div>
        <Button bsStyle="grey">Обратный звонок</Button>
      </div>
    )
  }
}

export default LightFrom