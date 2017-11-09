import React from 'react'
import {setBackgroundImage, removeBackgroundImage} from "../common/main";
import backgroundImage from './catalog-header.jpg'
import './projectIndex.css'
import {Grid, Row, Col, Image, Clearfix, Button, FormGroup, FormControl, InputGroup} from 'react-bootstrap'
import projectImage from './project-item.jpg'
import FontAwesome from 'react-fontawesome'
import IconTooltip from '../common/iconTooltip'
import DefaultFooter from "./defaultFooter";
import Page from '../layout/page'
import FadeTransition from '../common/fade'
import {Link} from 'react-router-dom'
import ScrollToTopOnMount from "../common/scrollToTopOnMount";
import ProjectApi from '../../api/projectApi'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      ctaForm: {
        firstName: '',
        phone: '',
        email: '',
        comment: ''
      }
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    const form = this.state.ctaForm;
    form[field] = event.target.value;
    this.setState({ctaForm: form});
  }

  submitForm(event) {
    (event).preventDefault();
    console.log('submit form data from state: ', this.state.ctaForm)
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
    setBackgroundImage(backgroundImage, 'no-repeat', 'inherit');
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  render() {
    console.log('projects', this.props.projects);
    const projects = this.props.projects || null;
    return (
        <Page>
          <ScrollToTopOnMount/>
          <div className="project-index">
            <Grid>
              <Row>
                <div>
                  <div className="menu-divider"/>
                  <h1 className="title">Проекты домов и коттеджей</h1>
                  <p className="text-center description">Типовые проекты частных домов от компании Сервус</p>
                  <Row className="item-list">
                    {/*<Col md={3} mdPush={9}>*/}
                      {/*Filter*/}
                    {/*</Col>*/}
                    <Col md={12} > {/* change to md={9} mdPull={3}*/}
                      {projects.map((project) => {
                        return <Col md={4} sm={4} xs={12}>
                          <div className="project-item">
                            <Link to="/projects/gnap">
                              <Image src={project.model.medium} responsive/>
                            </Link>
                            <div className="project-options">
                              <Col md={4} xs={4}>
                                <div className="option-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                                    <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                                  </svg>
                                  <br/>
                                  с мансардой</div>
                              </Col>
                              <Col md={4} xs={4}>
                                <div className="option-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                                    <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                                  </svg>
                                  <br/>
                                  с террасой
                                </div>
                              </Col>
                              <Col md={4} xs={4}>
                                <div className="option-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                                    <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                                  </svg>
                                  <br/>
                                  с гаражом
                                </div>
                              </Col>
                              <Clearfix/>
                            </div>
                            <h3>Проект "{project.title}"</h3>
                            <div className="item-footer">
                              <Col md={6}  className="area-wrapper">
                                <div className="area"><span className="text-highlight">{project.area} <span className="units">кв.м.</span></span></div>
                                <small className="area-description">площадь объекта</small>
                              </Col>
                              <Col md={6} className="btn-wrapper">
                                <Link to="/projects/gnap"><Button bsStyle="grey">Подробнее</Button></Link>
                              </Col>
                              <Clearfix/>
                            </div>
                          </div>
                        </Col>
                      })}
                    </Col>
                  </Row>
                </div>
              </Row>
            </Grid>
            <Row>
              <Grid fluid className="cta-section">
                <Grid><Row className="cta-row">
                  <Col md={6}>
                    <h2><span className="text-highlight">Не нашли</span> подходящий проект?</h2>
                    <p className="section-description">
                      Если ваше представление о доме выходят за рамки готовых проектов мы разработаем индивидуальный проект исходя из ваших предпочтений. Воплотим самые смелые архитектурные идеи вместе!
                    </p>
                  </Col>
                  <Col md={6}>
                    <div className="form-wrapper">
                      <div className="form-badge">Бесплатно</div>
                      <h4 className="text-center">Получить консультацию по индивидуальному проектированию</h4>
                      <form className="price-form">
                        <FormGroup>
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
                        </FormGroup>
                        <FormGroup>
                          <InputGroup>
                            <InputGroup.Addon className="input-icon">
                              <FontAwesome name="phone" fixedWidth/>
                            </InputGroup.Addon>
                            <FormControl
                              name="phone"
                              type="phone"
                              className="input-textfield"
                              placeholder="Ваш телефон"
                              onFocus={this.handleFocus.bind(this)}
                              onBlur={this.handleBlur.bind(this)}
                              onChange={this.updateFormState.bind(this)}
                            />
                          </InputGroup>
                        </FormGroup><FormGroup>
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
                        <FormGroup>
                          <InputGroup>
                            <InputGroup.Addon className="input-icon">
                              <FontAwesome name="commenting-o" fixedWidth/>
                            </InputGroup.Addon>
                            <FormControl
                              name="comment"
                              componentClass="textarea"
                              className="input-textfield"
                              placeholder="Каким бы Вы хотели видеть ваш дом?"
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
                </Row></Grid>
              </Grid>
            </Row>
            <DefaultFooter/>
          </div>
        </Page>
    )
  }
}

export default ProjectIndex