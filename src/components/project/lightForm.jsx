import React from 'react'
import {FormGroup, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import CallbackForm from "../common/forms/callbackForm";
import DefaultModal from "../common/defaultModal";

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
        firstName: '',
        phone: '',
        email: '',
        projectTitle: '',
        projectArea: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectTitle && nextProps.projectArea) {
      this.setState({form: {projectTitle: nextProps.projectTitle, projectArea: nextProps.projectArea}});
    }
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false})
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
      <div className="light-form-wrapper">
        <div className="form-badge">Бесплатно</div>
        <h4 className="text-center title">
          {this.props.title || this.state.title}
        </h4>
        <form className="form-light">
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
          <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
        </form>
        или звоните
        <div className="phone-number"><h4><span>+38 (096)</span> 888 50 50</h4></div>
        <Button bsStyle="grey" onClick={this.openModal.bind(this)}>Обратный звонок</Button>
        <DefaultModal
          show={this.state.showModal}
          onHide={this.closeModal.bind(this)}
          title="Получить консультацию"
        >
          <CallbackForm/>
        </DefaultModal>
      </div>
    )
  }
}

export default LightFrom