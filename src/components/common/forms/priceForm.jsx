import React from 'react'
import {FormGroup, Row, Col, InputGroup, FormControl, Button, Radio} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './priceForm.css'
import GetPriceFormApi from '../../../api/getPriceFormApi'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../fade'
import ReactGA from 'react-ga'
import gaException from '../../common/analytics/gaException'

class PriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      form: {
        floors: '',
        area: '',
        phone: '',
        email: '',
        url: '',
      },
      errors: {
        floors: null,
        area: null,
        email: null,
        phone: null,
      },
      animateIn: true
    }
  }

  componentDidMount() {
    this.setState({form: {url: window.location.href}})
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
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'Price', action: "Submitted Form 'Предварительная стоимость дома Сервус'"});
          this.setState({animateIn: false});
          setTimeout(() => {
            this.props.toggleFormSubmission()
          }, 800);
        }
      },
      (error) => {
        console.log('error: ', error)
      }
    )
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
      <TransitionGroup>
        <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
          <form className="price-form form-light">
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
            <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green" block>Узнать стоимость</Button>
          </form>
        </FadeTransition>
      </TransitionGroup>
    )
  }
}

export default PriceForm