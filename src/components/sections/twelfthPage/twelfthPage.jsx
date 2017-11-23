import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen12.jpg'
import './twelfthPage.css'
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl, ControlLabel} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Page from '../../layout/page'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import OwnProjectFormApi from '../../../api/ownProjectFormApi'
import SuccessMessage from '../../common/forms/successMessage'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../../common/fade'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";

class TwelfthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 12,
      colorScheme: "dark",
      form: {
        name: '',
        phone: '',
        email: '',
        attachmentUrl: '',
        message: '',
        url: ''
      },
      errors: {
        phone: null,
        email: null,
        attachment: null
      },
      file: null,
      signedUrl: null,
      fileLabel: 'Прикрепить файл',
      animateIn: true,
      animateInForm: true,
      submitForm: false
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    const form = this.state.form;
    form[field] = event.target.value;
    this.setState({form: form});
  }

  handleFormSubmit() {
    OwnProjectFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          return this.setState({errors: response.data.errors})
        }
        if (response.data.sent) {
          this.setState({animateInForm: false});
          setTimeout(() => {
            this.toggleFormSubmission()
          }, 800);
        }
      },
      (error) => {
        console.log('error: ', error)
      }
    )
  }

  uploadFile(signedUrl, file) {
    let options = {
      headers: {
        'Content-Type': file.type
      }
    };
    return axios.put(signedUrl, file, options)
  }

  submitForm(event) {
    (event).preventDefault();
    if (this.state.signedUrl && this.state.file) {
      return this.uploadFile(this.state.signedUrl, this.state.file).then(
        () => {
          this.handleFormSubmit()
        })
    } else {
      return this.handleFormSubmit()
    }
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

  onDrop(files) {
    let file = files[0];
    this.setState({ file: file});
    axios.post('https://servus.vn.ua/rest/signedurl', {
      filename: file.name,
      filetype: file.type
    })
    .then((response) => {
      let form = this.state.form;
      form["attachmentUrl"] = response.data.url;
      this.setState({
        signedUrl: response.data.signedUrl,
        form: form
      });
      console.log('signed url: ', this.state.signedUrl);
      console.log('url: ', this.state.url);
      },
      (error) => {
      console.log('sign file error', error);
      }
    );
  }

  componentDidMount() {
    this.setState({form: {url: window.location.href}})
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
  }

  finishFormSubmission() {
    this.setState({form: {}, errors: {}});
    if (this.state.submitForm) {
      this.setState({submitForm: false, animateInForm: true})
    }
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="twelfth-section">
              <Row>
                <Col md={5} mdPush={7} sm={12} xs={12} className="own-project-desc">
                  <h1><span className="text-highlight">У вас уже есть</span> проект дома?</h1>
                  <span className="line"/>
                  <p>Вы уже решили какой дом хотите построить и даже купили проект?</p>
                  <p>
                    Тогда приходите к нам со своим проектом
                    и мы бесплатно адаптируем его под технологию строительства Сервус, еще и <span className="text-highlight">дадим индивидуальную скидку</span>,
                    что компенсирует вам затраты на покупку проекта
                  </p>
                </Col>
                <Col md={7} mdPull={5} xs={12} sm={12}>
                  <div className="form-wrapper">
                    <div className="form-badge">Бесплатно</div>
                    <h4 className="text-center">Присылайте свой проект для расчета стоимости строительства</h4>
                    {this.state.submitForm ?
                      <SuccessMessage closeModal={this.finishFormSubmission.bind(this)}/>
                      :
                      <TransitionGroup>
                        <FadeTransition shouldShow={this.state.animateInForm} timeout={1000} classNames="fade">
                          <form className="form-dark">
                            <FormGroup>
                              <Row>
                                <Col md={6} sm={12} xs={12}>
                                  <InputGroup className="">
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
                                  {this.state.errors.phone &&
                                    <p className="form-error">{this.state.errors.phone}</p>
                                  }
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
                                  {this.state.errors.email &&
                                  <p className="form-error">{this.state.errors.email}</p>
                                  }
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                  {/*use empty style tag to reset default Dropzone styles*/}
                                  <Dropzone onDrop={this.onDrop.bind(this)} style={{}} multiple={false}>
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
                                  </Dropzone>
                                  {this.state.errors.attachment &&
                                  <p className="form-error">{this.state.errors.attachment}</p>
                                  }
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
                                    name="message"
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
                            <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green"
                                    block>Отправить</Button>
                          </form>
                        </FadeTransition>
                      </TransitionGroup>
                    }
                  </div>
                </Col>
              </Row>
            </div>
          </Grid>
        <div onClick={this.props.nextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default TwelfthPage
