import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen10.jpg'
import './tenthPage.css'
import {Row, Col, Button, FormGroup, Radio, InputGroup, FormControl} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Link} from "react-router-dom";

class TenthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark",
      form: {
        floor: '',
        square: '',
        phone: '',
        email: ''
      }
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    const form = this.state.form;
    form[field] = event.target.value;
    this.setState({form: form});
    console.log('state floor: ', this.state.form.floor);
    console.log('event target value: ', event.target.value);
    console.log('state form: ', this.state.form)
  }

  submitForm(event) {
    (event).preventDefault();
    this.props.actions.createLead(this.state.lead).then(response => {
      this.props.history.push(response.data.lead.id.toString());
    });
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
      <div className="tenth-section"><Row>
        <Col md={6} className="euro-description">
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
        <Col md={6}>
          <div className="form-wrapper">
            <div className="form-badge">Бесплатно</div>
            <h4 className="text-center">Узнать предварительную стоимость строительства энергоэффективного дома</h4>
            <form className="price-form">
              <FormGroup>
                <Row>
                  <p className="text-left p-line">Этажность</p>
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={4}>
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
                  <Col md={4}>
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
                  <Col md={4}>
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
                    <FontAwesome name="phone"/>
                  </InputGroup.Addon>
                  <FormControl
                    type="text" className="input-textfield"
                    placeholder="Ваше имя"
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                  />
                </InputGroup>
              </FormGroup>
            </form>
          </div>
        </Col>
      </Row></div>
    )
  }
}

export default TenthPage
