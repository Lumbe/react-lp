import React from 'react'
import './projectPage.css'
import {Grid, Row, Col, Image, Clearfix, Tabs, Tab, Media} from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import "./imageGalleryTheme.css"
import mansardIcon from './images/mansard-icon.png'
import terraceIcon from './images/terrace-icon.png'
import garageIcon from './images/garage-icon.png'
import planIcon from './images/plan-icon.png'
import LightForm from './lightForm'
import './lightForm.css'
import Page from '../layout/page'
import FadeTransition from '../common/fade'
import ScrollToTopOnMount from "../common/scrollToTopOnMount";
import ProjectApi from '../../api/projectApi'
import FontAwesome from'react-fontawesome'
import IconTooltip from '../common/iconTooltip'
import SuccessMessage from '../common/forms/successMessage'
import {resetWindowHeight, removeBackgroundImage, removeDarkColorScheme} from "../common/main";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      slug: this.props.match.params.slug,
      project: {},
      submitForm: false
    }
  }
  componentDidMount() {
    ProjectApi.getOne(this.state.slug).then(
      (response) => {
        this.setState({project: response.data.project})
      },
      (error) => {
        console.log('error: ', error)
      });
    // react-snap workaround
    resetWindowHeight();
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
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
    const project = this.state.project;
    let imagesUrls = [];
    if (project.model) {
      imagesUrls.push({original: project.model.big, thumbnail: project.model.thumb})
    }
    if (project.facades && project.facades.length) {
      project.facades.forEach(function(facade) {
        imagesUrls.push({original: facade.original, thumbnail: facade.thumb})
      })
    }
    if (project.photos && project.photos.length) {
      project.photos.forEach((photo) => {
        imagesUrls.push({original: photo.original, thumbnail: photo.thumb})
      })
    }
    const formTitle = <span><span className="text-highlight">Рассчитать стоимость</span> строительства
      дома по проекту "{project.title}" {project.area}кв.м.</span>;
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <div className="project-page">
            <Grid>
              <div className="menu-divider"/>
              <h1>Проект "{project.title}"</h1>
              <Row>
                <Col md={3} mdPush={9}>
                  {this.state.submitForm ?
                    <SuccessMessage closeModal={this.finishFormSubmission.bind(this)}/>
                    :
                    <LightForm
                      title={formTitle}
                      projectTitle={project.title}
                      projectArea={project.area}
                      toggleFormSubmission={this.toggleFormSubmission.bind(this)}
                    />
                  }
                </Col>
                <Col md={9} mdPull={3}>
                  <Row>
                    <Col md={12}>
                      <div className="card">
                        <ImageGallery
                          items={imagesUrls}
                          slideInterval={2000}
                          showFullscreenButton={false}
                          showPlayButton={false}
                          showNav={false}
                        />
                        <div className="project-options">
                          <Col md={3} sm={3} xs={4}>
                            <div className={project.mansard ? "option-item" : 'option-item inactive'}>
                              {!project.mansard && <IconTooltip
                                id="info-tooltip"
                                tooltip="В этот проект можно добавить мансарду"
                              >
                                <div className="info">
                                  <FontAwesome name="info"/>
                                </div>
                              </IconTooltip>}
                              <div className="img-wrap">
                                <Image src={mansardIcon}/>
                              </div>
                              {project.mansard ? 'с мансардой' : 'без мансарды'}
                            </div>
                          </Col>
                          <Col md={3} sm={3} xs={4}>
                            <div className={project.terrace ? "option-item" : 'option-item inactive'}>
                              {!project.terrace && <IconTooltip
                                id="info-tooltip"
                                tooltip="В этот проект можно добавить террасу"
                              >
                                <div className="info">
                                  <FontAwesome name="info"/>
                                </div>
                              </IconTooltip>}
                              <div className="img-wrap"><Image src={terraceIcon}/></div>
                              {project.terrace ? 'с террасой' : 'без террасы'}
                            </div>
                          </Col>
                          <Col md={3} sm={3} xs={4}>
                            <div className={project.garage ? "option-item" : 'option-item inactive'}>
                              {!project.garage && <IconTooltip
                                id="info-tooltip"
                                tooltip="В этот проект можно добавить гараж"
                              >
                                <div className="info">
                                  <FontAwesome name="info"/>
                                </div>
                              </IconTooltip>}
                              <div className="img-wrap"><Image src={garageIcon}/></div>
                              {project.garage ? 'с гаражом' : 'без гаража'}
                            </div>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <div className="option-item">
                              <div className="area">{project.area} <span className="units">кв.м.</span></div>
                              <span className="area-description">площадь объекта</span>
                            </div>
                          </Col>
                          <Clearfix/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <h3>Описание</h3>
                      <p>
                        {project.description}
                      </p>
                    </Col>
                  </Row>
                  {(project.first_floor_plan || project.second_floor_plan) && <Row>
                    <Col md={12}>
                      <Tabs className="house-plans" defaultActiveKey={1} id="project-floors">
                        <h3>Планировка</h3>
                        {project.second_floor_plan && <Tab eventKey={2} title="2-й этаж">
                          <Image className="img-plan" src={project.second_floor_plan.original} responsive/>
                          <div className="plans-divider"/>
                          <ol className="plans-list">
                            {project.second_floor_desc.split(/[\r\n]+/).map((item, index) => {
                              return <li key={index}>{item}</li>
                            })}
                          </ol>
                        </Tab>}
                        {project.first_floor_plan && <Tab eventKey={1} title="1-й этаж">
                          <Image className="img-plan" src={project.first_floor_plan.original} responsive/>
                          <div className="plans-divider"/>
                          <ol className="plans-list">
                            {project.first_floor_desc.split(/[\r\n]+/).map((item, index) => {
                              return <li key={index}>{item}</li>
                            })}
                          </ol>
                        </Tab>}
                      </Tabs>
                    </Col>
                  </Row>}
                  <div className="plans-info">
                    <Media>
                      <Col md={2} sm={2} xs={12}><Media.Left align="middle">
                        <Image src={planIcon}/>
                      </Media.Left></Col>
                      <Col md={10} sm={10} xs={12}><Media.Body>
                        <p>
                          Этот проект можно изменить по вашему желанию. Например, поменять планировку,
                          добавить или убрать террасу, гараж. Дизайн фасада так же может быть выполнен
                          в другом стиле, например с использованием таких декоративных материалов как декор.штукатурка
                          "короед", фасадная плитка или кирпич
                        </p>
                      </Media.Body></Col>
                    </Media>
                  </div>
                </Col>
                {/*<Col md={12}>*/}
                  {/*similar projects similar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projects*/}
                {/*</Col>*/}
              </Row>
            </Grid>
          </div>
        </Page>
      </FadeTransition>
    )
  }
}

export default ProjectPage