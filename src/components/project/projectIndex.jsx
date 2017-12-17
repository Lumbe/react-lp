import React from 'react'
import {setBackgroundImage, removeBackgroundImage} from "../common/main";
import backgroundImage from './catalog-header.jpg'
import './projectIndex.css'
import {Grid, Row, Col, Image, Clearfix, Button, FormGroup, FormControl, InputGroup, Pagination} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import IconTooltip from '../common/iconTooltip'
import Page from '../layout/page'
import {Link} from 'react-router-dom'
import ScrollToTopOnMount from "../common/scrollToTopOnMount";
import SuccessMessage from '../common/forms/successMessage'
import ContactFormApi from '../../api/contactFormApi'
import ReactGA from 'react-ga'
import gaException from '../common/analytics/gaException'
import Filter from './filter/filter'
import {removeDarkColorScheme} from "../common/main";

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      ctaForm: {
        name: '',
        phone: '',
        email: '',
        message: '',
        url: ''
      },
      errors: {
        email: null,
        phone: null,
        message: null,
      },
      submitForm: false,
      filter: {}
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
    ContactFormApi.create(this.state.ctaForm).then(
      (response) => {
        if (response.data.errors) {
          gaException(response.data.errors);
          return this.setState({errors: response.data.errors})
        }
        if (response.data.sent) {
          ReactGA.event({category: 'Catalogue', action: "Submitted Form 'Консультация по индивидуальному проектированию'"});
          this.setState({animateIn: false});
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

  loadFilteredProjects(params) {
    this.setState({filter: params}, () => {
      document.getElementById('projects-list').scrollIntoView({block: "start", behavior: "smooth"});
      this.props.load(Object.assign(params, {page: 1}))
    })
  }

  loadPage(event) {
    document.getElementById('projects-list').scrollIntoView({block: "start", behavior: "smooth"});
    this.props.load(Object.assign(this.state.filter, {page: event}));
    // console.log('props', this.props);
    // console.log('state', this.state);
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage, 'no-repeat', 'inherit');
  }

  componentDidMount() {
    this.setState({ctaForm: {url: window.location.href}});
    removeDarkColorScheme(); // to do: do not cache this with react-snap?
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
  }

  finishFormSubmission() {
    this.setState({ctaForm: {}, errors: {}});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  render() {
    const projects = this.props.projects || null;
    const meta = this.props.meta;
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
                    <Col md={3} mdPush={9}>
                      <Filter loadProjects={this.loadFilteredProjects.bind(this)}/>
                    </Col>
                    <Col md={9} mdPull={3} id="projects-list"> {/* change to md={9} mdPull={3}*/}
                      {projects.map((project, index) => {
                        return <Col md={6} sm={6} xs={12} key={index}>
                          <div className="project-item">
                            <Link to={"/projects/" + project.slug}>
                              <Image src={project.model.medium} responsive/>
                            </Link>
                            <div className="project-options">
                              <Col md={4} xs={4}>
                                <div className={project.mansard ? "option-item" : 'option-item inactive'}>
                                  {!project.mansard && <IconTooltip
                                    id="info-tooltip"
                                    tooltip="В этот проект можно добавить мансарду"
                                  >
                                    <div className="info">
                                      <FontAwesome name="info"/>
                                    </div>
                                  </IconTooltip>}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                                    {project.mansard ?
                                      <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                                      :
                                      <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAQAAADyUt1YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCw0KEio6rreYAAABcUlEQVQoz5WST0iTARjGf59OCARH5RD6AvVghB4CsckIZgU68di1DgopIWzdhfAyAw2FSI8iXrp07hCdOoQwiPCQoBCU8YMWxWQixhyjgzC/1Tr4vKf3z/M+Dy9vQAR284l2muGIgfDrWdrS0FzhPb30sc8LeuvRxxcCVmgOR614Dcz53Y5IPWvRm1YcbUZqc8dFMGHJyUg9Yckpe1x0x7Z/TWaJkwcW2GUTvGs3AE/ZpcJnXhMn+7dWl2Xvg4NWTYJXPTIDDlk1re675QPLdjWqLbHNS2CZzbAAPGMrfGPAKhtMUCbFdWJssxTVSln1BoCzXgbTnjgATlpy+PQY5ix6y6opgABsoUAhnK0vaeUD78LHxtkjzwTH4T0wxkfecoEkybAWAx7Sw1hEfJorzAPzFPnGOFPeBuAVT0gzRCc/8KI/fRQxfMlfzoD9njjicw8aInc6FbhGhjFqdd4cd8hQY50a0//5jN+BB8Q5Lw7/ACMlrpx4+Y0iAAAAAElFTkSuQmCC"/>
                                    }
                                  </svg>
                                  <br/>
                                  {project.mansard ? 'с мансардой' : 'без мансарды'}
                                </div>
                              </Col>
                              <Col md={4} xs={4}>
                                <div className={project.terrace ? "option-item" : 'option-item inactive'}>
                                  {!project.terrace && <IconTooltip
                                    id="info-tooltip"
                                    tooltip="В этот проект можно добавить террасу"
                                  >
                                    <div className="info">
                                      <FontAwesome name="info"/>
                                    </div>
                                  </IconTooltip>}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                                    {project.terrace ?
                                      <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                                      :
                                      <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAQAAAAqnqXBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCw0KEym6vNdjAAABMklEQVQoz42QMUsDQRSEv4sR0SI2SRGuEbHyWi0EQa0stAiIsRURK+0kkF+gWIZ0NqmtBEG0E6wEbRS0iEVARjAmcBycIl6MxZ0hmwuSaXZndnZ29oEBzehWz1o21USXIaUSN3xyz4VOlCUOretVTW3JAq2oJk97Guo2TOpcbVWU7ihjOtC37jQb0mEV9aEnLcSyp3Wtlsoat3TGKuAT9OlgkQJeLM0zZRxsk+bQUJrxD1R01aslGABxU4ufeHxBGYM7mjN4RgXUVu6/p5RTOxltj9jp47i0NwAiE8c89hnBQ7hEJrtKNcpcJLArZmASKGoTgC927fe/upQZASAbjsDHxSUgj9O57JAnwMXFD5NK9ilogrWe2vt2DZRjaaCJJ/GoA+Dh0wDeGAUa+HgA1PF+AQGAe7llGeNDAAAAAElFTkSuQmCC"/>
                                    }
                                  </svg>
                                  <br/>
                                  {project.terrace ? 'с террасой' : 'без террасы'}
                                </div>
                              </Col>
                              <Col md={4} xs={4}>
                                <div className={project.garage ? "option-item" : 'option-item inactive'}>
                                  {!project.garage && <IconTooltip
                                    id="info-tooltip"
                                    tooltip="В этот проект можно добавить гараж"
                                  >
                                    <div className="info">
                                      <FontAwesome name="info"/>
                                    </div>
                                  </IconTooltip>}
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                                    {project.garage ?
                                      <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                                      :
                                      <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAQAAACVkV9MAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCw0KFASwIh3RAAABGUlEQVQoz4WRr0sDYRzGPzcWhAUtInowDo/9A1oUFjQIVjEuCToGlgWjGPzRhA1mFDlQm8EiiM25RcO6Qxk81blwDC2v4e6me4XzSc/7/X54+D68DgDI45R1cvxWyD177htANh7dsEiL7hjms8k8C6O3ZmV0zR/pUkZzABkAloHH0XJLPYW60iRNoPiDLQHtGCpywQQdSjRoxxFkQXlW+WJG0wDsACd0aLBBwCcryrs9R0fs85+OHQ3pcp4KbeMjoyA9SoFMJra+qipY64Kq8iMfY5SpUbFiKtQoRzb5hUPueLawA26TWYy5IU37JjfkKfGO+gx5SO2wRs5RiTOmUrEBu0mruow8q6kno/p40xcG9K2Udz54jew3dIldcdY1y5YAAAAASUVORK5CYII="/>
                                    }
                                  </svg>
                                  <br/>
                                  {project.garage ? 'с гаражом' : 'без гаража'}
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
                                <Link to={"/projects/" + project.slug}><Button bsStyle="grey">Подробнее</Button></Link>
                              </Col>
                              <Clearfix/>
                            </div>
                          </div>
                        </Col>
                      })}
                      <Clearfix/>
                      {(projects.length > 0) && <div className="text-center">
                        <Pagination
                          prev
                          next
                          ellipsis
                          boundaryLinks
                          maxButtons={3}
                          items={meta.total_pages}
                          activePage={meta.current_page}
                          onSelect={this.loadPage.bind(this)}/>
                      </div>}
                      {(projects.length === 0) && <div>Проекты не найдены, измените параметры поиска</div>}
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
                      {this.state.submitForm ?
                        <SuccessMessage closeModal={this.finishFormSubmission.bind(this)}/>
                        :
                        <form className="price-form">
                        <FormGroup>
                          <InputGroup>
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
                          {this.state.errors.phone &&
                          <p className="form-error">{this.state.errors.phone}</p>
                          }
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
                          {this.state.errors.email &&
                          <p className="form-error">{this.state.errors.email}</p>
                          }
                      </FormGroup>
                        <FormGroup>
                          <InputGroup>
                            <InputGroup.Addon className="input-icon">
                              <FontAwesome name="commenting-o" fixedWidth/>
                            </InputGroup.Addon>
                            <FormControl
                              name="message"
                              componentClass="textarea"
                              className="input-textfield"
                              placeholder="Каким бы Вы хотели видеть ваш дом?"
                              onFocus={this.handleFocus.bind(this)}
                              onBlur={this.handleBlur.bind(this)}
                              onChange={this.updateFormState.bind(this)}
                            />
                          </InputGroup>
                          {this.state.errors.message &&
                          <p className="form-error">{this.state.errors.message}</p>
                          }
                        </FormGroup>
                        <Button onClick={this.submitForm.bind(this)} bsSize="large" bsStyle="green"
                                block>Отправить</Button>
                      </form>}
                    </div>
                  </Col>
                </Row></Grid>
              </Grid>
            </Row>
          </div>
        </Page>
    )
  }
}

export default ProjectIndex