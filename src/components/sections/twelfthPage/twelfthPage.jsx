import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen12.jpg'
import './twelfthPage.css'
import {Row, Col, Button, FormGroup, InputGroup, FormControl, ControlLabel} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import FileReaderInput from 'react-file-reader-input'

class TwelfthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark",
      form: {
        firstName: '',
        phone: '',
        email: '',
        file: '',
        comment: ''
      },
      fileLabel: 'Прикрепить файл'
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
      return addon.style.borderColor = '#ebebeb';
    }
  }

  handleChange = (e, results) => {
    results.forEach(result => {
      const [e, file] = result;
      // this.props.dispatch(uploadFile(e.target.result));
      console.log(`Successfully uploaded ${file.name}!`);
      this.setState({fileLabel: file.name});
    });
  }

  componentDidMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
    removeBackgroundImage();
    removeDarkColorScheme();
  }
  render() {
    return (
      <div className="twelfth-section">
        <Row>
          <Col md={5} mdPush={7} sm={12} xs={12}>
            <h1><span className="text-highlight">У вас уже есть</span> проект дома?</h1>
            <span className="line"/>
            <p>Вы уже решили какой дом хотите построить и даже купили проект?</p>
            <p>
              Тогда приходите к нам со своим проектом
              и мы бесплатно адаптируем его под технологию строительства Сервус, еще и дадим индивидуальную скидку,
              что компенсирует вам затраты на покупку проекта
            </p>
          </Col>
          <Col md={7} mdPull={5} xs={12} sm={12}>
            <div className="form-wrapper">
              <div className="form-badge">Бесплатно</div>
              <h4 className="text-center">Присылайте свой проект для расчета стоимости строительства</h4>
              <form className="price-form">
                <FormGroup>
                  <Row>
                    <Col md={6} sm={12} xs={12}>
                      <InputGroup className="">
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
                    <Col md={6} sm={12} xs={12}>
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
                    <Col md={6} sm={12} xs={12}>
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
                    <Col md={6} sm={12} xs={12}>
                      <FileReaderInput
                        as="binary"
                        id="my-file-input"
                        onChange={this.handleChange}
                      >
                        <InputGroup>
                          <ControlLabel className="form-control file-upload">
                            <span className="label-text">
                              {this.state.fileLabel}
                            </span>
                          </ControlLabel>
                          <InputGroup.Addon className="right-icon">
                            <FontAwesome name="plus-circle" fixedWidth/>
                          </InputGroup.Addon>
                        </InputGroup>
                      </FileReaderInput>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
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
                  </Row>
                </FormGroup>
                <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TwelfthPage
