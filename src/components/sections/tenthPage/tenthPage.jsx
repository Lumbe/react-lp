import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen10.jpg'
import './tenthPage.css'
import {Tooltip, OverlayTrigger, Table, Grid, Row, Col, Button, FormGroup, Radio, InputGroup, FormControl, Modal} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount"
import SuccessMessage from '../../common/forms/successMessage'
import GetPriceFormApi from '../../../api/getPriceFormApi'
import ReactGA from 'react-ga'
import gaException from '../../common/analytics/gaException'
import InputMask from 'react-input-mask'
import Helmet from 'react-helmet'

class TenthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 10,
      colorScheme: "dark",
      showModal: false,
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
      submitForm: false,
      sending: false
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
    this.setState({sending: true});
    GetPriceFormApi.create(this.state.form).then(
      (response) => {
        if (response.data.errors) {
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors, sending: false})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'Price', action: "submitForm", label: 'Price Page', value: 1});
          setTimeout(() => {
            this.toggleFormSubmission()
          }, 800);
        }
      },
      (error) => {
        this.setState({sending: false});
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
    this.setState({submitForm: !this.state.submitForm, sending: false})
  }

  finishFormSubmission() {
    this.setState({form: {}, errors: {}, sending: false});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  openModal() {
    this.setState({showModal: true});
   }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    const economTooltip = <Tooltip id="standart-tooltip"><FontAwesome name="star"/> Толщина стены - 160мм<br/><FontAwesome name="star"/> Толщина OSB - 10мм<br/><FontAwesome name="star"/> Высота стены - 2,5м</Tooltip>;
    const standartTooltip = <Tooltip id="premium-tooltip"><FontAwesome name="star"/> Толщина стены - 164мм<br/><FontAwesome name="star"/> Толщина OSB - 12мм<br/><FontAwesome name="star"/> Высота стены - 2,8м</Tooltip>;
    const standartServusTooltip = <Tooltip id="premium-plus-tooltip"><FontAwesome name="star"/> Графитовый пенополистирол<br/><FontAwesome name="star"/> Толщина стены - 164мм<br/><FontAwesome name="star"/> Толщина OSB - 12мм<br/><FontAwesome name="star"/> Высота стены - 3,1м</Tooltip>;
    const euroServusTooltip = <Tooltip id="delux-tooltip"><FontAwesome name="star"/> Графитовый пенополистирол<br/><FontAwesome name="star"/> Толщина стены - 170мм<br/><FontAwesome name="star"/> Толщина OSB - 15мм<br/><FontAwesome name="star"/> Высота стены - 2,8м</Tooltip>;
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Helmet>
            <title>Каркасный дом - цена строительства</title>
            <meta name="description" content="Стоимость строительства ⟰каркасного дома, включая работы по обустройству фундамента + монтаж каркаса дома специалистами компании Сервус ✪" />
            <script type="application/ld+json">{`
              {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://servus.vn.ua",
                    "name": "Сервус Винница",
                    "image": "https://servus.vn.ua/logo.jpg"
                  }
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": "https://servus.vn.ua/price",
                    "name": "Цены на строительство"
                  }
                }]
              }
            `}</script>
          </Helmet>
          <Grid>
            <div className="tenth-section">
              <Row>
                <Col md={6} sm={12} xs={12}>
                  <h1><span className="text-highlight">Цены</span> на строительство</h1>
                  <span className="line"/>
                  <p>
                    Узнать предварительную стоимость строительства дома Сервус можно заполнив форму. В таблице ниже приведена
                    только стоимость домокомплекта (без монтажа)
                  </p>
                  {/*<ul className="unordered-list">*/}
                      {/*<li>*/}
                        {/*<Link className="simple-link" to="own-project">*/}
                          {/*Если у Вас уже есть проект дома*/}
                        {/*</Link>*/}
                        {/*&nbsp;- присылайте его нам для расчета стоимости строительства*/}
                      {/*</li>*/}
                      {/*<li>*/}
                        {/*<span className="text-bold">Если еще нету проекта</span> - то заполните форму или выберите проект из нашего каталога*/}
                      {/*</li>*/}
                    {/*</ul>*/}
                  {/*<p>*/}
                    {/*Уже представляете каким должен быть ваш дом? Выберите проект из нашего каталога и оставьте заявку на расчет (это бесплатно)*/}
                  {/*</p>*/}
                  {/*<Link to="/projects">*/}
                    {/*<Button bsStyle="link" className="lp-link">*/}
                      {/*Проекты домов и коттеджей&nbsp;&nbsp;*/}
                      {/*<FontAwesome name="angle-right"/>*/}
                    {/*</Button>*/}
                  {/*</Link>*/}
                  <Table className="pricing" responsive>
                    <thead>
                    <tr>
                      <th>Комплектация</th>
                      <th>
                        <OverlayTrigger placement="top" overlay={economTooltip}>
                          <span>Эконом</span>
                        </OverlayTrigger>
                      </th>
                      <th>
                        <OverlayTrigger placement="top" overlay={standartTooltip}>
                          <span>Стандарт</span>
                        </OverlayTrigger>
                      </th>
                      <th>
                        <OverlayTrigger placement="top" overlay={standartServusTooltip}>
                          <span>Стандарт Сервус</span>
                        </OverlayTrigger>
                      </th>
                      <th>
                        <OverlayTrigger placement="top" overlay={euroServusTooltip}>
                          <span>Евро Сервус</span>
                        </OverlayTrigger>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Одноэтажные дома</td>
                        <td>95 у.е.</td>
                        <td>125 у.е.</td>
                        <td>130 у.е.</td>
                        <td>165.е.</td>
                      </tr>
                      <tr>
                        <td>Двухэтажные дома</td>
                        <td>105 у.е.</td>
                        <td>135 у.е.</td>
                        <td>140 у.е.</td>
                        <td>175 у.е.</td>
                      </tr>
                    </tbody>
                  </Table>
                  
                  <Button bsStyle="link" className="dashed-link" onClick={this.openModal.bind(this)}>Характеристики комплектаций</Button>
                  <Modal
                    dialogClassName="default-modal"
                    show={this.state.showModal}
                    onHide={this.closeModal.bind(this)}>
                    <Modal.Header>
                      <a onClick={this.closeModal.bind(this)} className="close-button"><FontAwesome name="times"/></a>
                      <Modal.Title>Характеристики комплектаций Сервус</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ul>
                        <li><b>ЭКОНОМ</b> — доступное жилье, подходит для дачных домиков</li>
                        <li><b>СТАНДАРТ</b> — стандарт строительства домов из СИП-панелей</li>
                        <li><b>СТАНДАРТ СЕРВУС</b>  — домокомплект на основе утеплителя из графитового пенополистирола с улучшенными энергосберегающими характеристиками. <b>Высота потолка увеличена до 3,1м</b></li>
                        <li><b>ЕВРО СЕРВУС</b> — домокомплект на основе утеплителя из графитового пенополистирола с улучшенными энергосберегающими характеристиками. <b>Толщина стеновой панели увеличена до 170мм</b></li>
                      </ul>
                      <b>Доп.информация</b>
                      <ul>
                        <li>Стоимость монтажных работ составляет 800грн/м.кв.</li>
                        <li>Стоимость одноэтажных домов площадью меньше 80м.кв. и двухэтажных домов площадью меньше 90м.кв. увеличивается на 10%</li>
                        <li>Дома площадью больше 300м.кв. рассчитываются индивидуально.</li>
                      </ul>
                    </Modal.Body>
                  </Modal>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="form-wrapper">
                    <div className="form-badge">Бесплатно</div>
                    <h4 className="text-center">Узнать предварительную стоимость строительства <span className="hidden-medium">энергоэффективного</span> дома</h4>
                    {this.state.submitForm ?
                      <SuccessMessage closeModal={this.finishFormSubmission.bind(this)}/>
                      :
                      <form className="form-dark">
                      <fieldset disabled={this.state.sending}><FormGroup>
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
                          <InputMask
                            name="phone"
                            type="tel"
                            className="input-textfield form-control"
                            placeholder="Ваш телефон"
                            onFocus={this.handleFocus.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            onChange={this.updateFormState.bind(this)}
                            mask="+38 (099) 999-99-99"
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
                      </FormGroup></fieldset>
                      <Button
                        onClick={this.submitForm.bind(this)}
                        bsSize="large"
                        bsStyle="green"
                        block
                        disabled={this.state.sending}
                      >
                        {this.state.sending ?
                          <span>Отправляем <FontAwesome name="spinner" spin/></span>
                          :
                          'Узнать стоимость'
                        }
                      </Button>
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
