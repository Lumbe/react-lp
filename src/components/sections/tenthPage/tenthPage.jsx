import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen10.jpg'
import './tenthPage.css'
import {Grid, Row, Col, Button, FormGroup, Radio, InputGroup, FormControl} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Link} from "react-router-dom";
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount"
import SuccessMessage from '../../common/forms/successMessage'
import GetPriceFormApi from '../../../api/getPriceFormApi'

class TenthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 10,
      colorScheme: "dark",
      form: {
        floors: '',
        area: '',
        phone: '',
        email: '',
        url: ''
      },
      errors: {
        floors: null,
        area: null,
        phone: null,
        email: null,
      },
      animateIn: true,
      submitForm: false
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
    GetPriceFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          return this.setState({errors: response.data.errors})
        }
        if (response.data.sent) {
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

  handleFocus(e) {
    let sibling = e.target.previousElementSibling;
    return sibling.style.borderColor = '#52ad44';
  }

  handleBlur(e) {
    let sibling = e.target.previousElementSibling;
    return sibling.style.borderColor = '#ebebeb';
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
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="tenth-section">
              <Row>
                <Col md={6} sm={12} xs={12}>
                  <h1><span className="text-highlight">Цены</span> на строительство домов</h1>
                  <span className="line"/>
                  <p>
                    Стоимость строительства дома по технологии Сервус зависит от нескольких параметров, таких как площадь, комплектация, этажность,
                    наличие мансарды, гаража, подвала и др. Так же стоимость зависит от комплектации дома (комплектация "Под внутренние работы", комплектация "Под ключ")
                  </p>
                    <ul>
                      <li>
                        <Link className="simple-link" to="own-project">
                          Если у Вас уже есть проект дома
                        </Link>
                        &nbsp;- присылайте его нам для расчета стоимости строительства
                      </li>
                      <li>
                        <span className="text-bold">Если еще нету проекта</span> - то заполните форму или выберите проект из нашего каталога
                      </li>
                    </ul>
                  <p>
                    Уже представляете каким должен быть ваш дом? Выберите проект из нашего каталога и оставьте заявку на расчет (это бесплатно)
                  </p>
                  <Link to="/projects">
                    <Button bsStyle="link" className="lp-link">
                      Проекты домов и коттеджей&nbsp;&nbsp;
                      <FontAwesome name="angle-right"/>
                    </Button>
                  </Link>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="form-wrapper">
                    <div className="form-badge">Бесплатно</div>
                    <h4 className="text-center">Узнать предварительную стоимость строительства <span className="hidden-medium">энергоэффективного</span> дома</h4>
                    {this.state.submitForm ?
                      <SuccessMessage closeModal={this.finishFormSubmission.bind(this)}/>
                      :
                      <form className="form-dark">
                      <FormGroup>
                        <Row>
                          <p className="text-left p-line">Этажность</p>
                          <Col md={6} sm={12} xs={12}>
                            <Radio
                              name="floors"
                              value="1 этаж"
                              inline
                              hidden
                              className={this.state.form.floors === '1 этаж' ? 'btn-radio checked' : 'btn-radio'}
                              onClick={this.updateFormState.bind(this)}>
                              1 этаж
                            </Radio>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <Radio
                              name="floors"
                              value="2 этажа"
                              inline
                              hidden
                              className={this.state.form.floors === '2 этажа' ? 'btn-radio checked' : 'btn-radio'}
                              onClick={this.updateFormState.bind(this)}>
                              2 этажа
                            </Radio>
                          </Col>
                        </Row>
                        {this.state.errors.floors &&
                        <p className="form-error">{this.state.errors.floors}</p>
                        }
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <p className="text-left p-line">Площадь</p>
                          <Col md={4} sm={12} xs={12}>
                            <Radio
                              name="area"
                              value="< 100кв.м."
                              inline
                              hidden
                              className={this.state.form.area === '< 100кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                              onClick={this.updateFormState.bind(this)}>
                              {'< 100кв.м.'}
                            </Radio>
                          </Col>
                          <Col md={4} sm={12} xs={12}>
                            <Radio
                              name="area"
                              value="100-150кв.м."
                              inline
                              hidden
                              className={this.state.form.area === '100-150кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                              onClick={this.updateFormState.bind(this)}>
                              100-150кв.м.
                            </Radio>
                          </Col>
                          <Col md={4} sm={12} xs={12}>
                            <Radio
                              name="area"
                              value="> 150кв.м."
                              inline
                              hidden
                              className={this.state.form.area === '> 150кв.м.' ? 'btn-radio checked' : 'btn-radio'}
                              onClick={this.updateFormState.bind(this)}>
                              > 150кв.м.
                            </Radio>
                          </Col>
                        </Row>
                        {this.state.errors.area &&
                        <p className="form-error">{this.state.errors.area}</p>
                        }
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
                      <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Узнать
                        стоимость</Button>
                    </form>}
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

export default TenthPage
