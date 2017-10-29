import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen10.jpg'
import './tenthPage.css'
import {Grid, Row, Col, Button, FormGroup, Radio, InputGroup, FormControl} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Link} from "react-router-dom";
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import _ from 'lodash'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";

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
        floor: '',
        square: '',
        phone: '',
        email: ''
      },
      animateIn: true
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
    let sibling = e.target.previousElementSibling;
    return sibling.style.borderColor = '#52ad44';
  }

  handleBlur(e) {
    let sibling = e.target.previousElementSibling;
    return sibling.style.borderColor = '#ebebeb';
  }

  componentWillMount() {
    window.onwheel = _.debounce((e) => {
      if (e.wheelDelta > 0) {
        let scrollToId = this.state.pageId - 1;
        this.props.goToPage(scrollToId);
      } else {
        let scrollToId = this.state.pageId + 1;
        this.props.goToPage(scrollToId);
      }
    }, 30);
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }
  handleNextPage() {
    let scrollToId = this.state.pageId + 1;
    return this.props.goToPage(scrollToId);
  }
  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={500} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          {/*<StaticFrame/>*/}
          {/*<VerticalMenu/>*/}
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
                        <Link className="simple-link" to="12-page">
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
                  <Button bsStyle="link" className="lp-link">
                    Проекты домов и коттеджей&nbsp;&nbsp;
                    <FontAwesome name="angle-right"/>
                  </Button>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="form-wrapper">
                    <div className="form-badge">Бесплатно</div>
                    <h4 className="text-center">Узнать предварительную стоимость строительства <span className="hidden-medium">энергоэффективного</span> дома</h4>
                    <form className="form-dark">
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
                      <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Отправить</Button>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Grid>
        <div onClick={this.handleNextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default TenthPage
