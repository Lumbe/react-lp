import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen8.jpg'
import './eighthPage.css'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ProjectApi from '../../../api/projectApi'
import ProjectsSlider from './projectsSlider'
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'

class EighthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 8,
      colorScheme: "dark",
      animateIn: true,
      projects: []
    }
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentDidMount() {
    ProjectApi.getPopular().then(
      (response) => {
        this.setState({projects: response.data.projects})
      },
      (error) => {
        // this.setState({isFetching: false});
        console.log('error: ', error)
      }
    )
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <Helmet>
            <title>Проекты энергосберегающих домов и коттеджей</title>
            <meta name="description" content="При строительстве дома первым делом нужно выбрать ⟰проект. Большой выбор оригинальных проектов от наших архитекторов Ꙭ смотрите в каталоге " />
          </Helmet>
          <Grid>
            <div className="eighth-section">
              <Row className="table-row">
                <Col md={5}>
                  <h1><span className="text-highlight">Проекты</span> энергосберегающих домов и коттеджей</h1>
                  <p className="section-description">Большой выбор оригинальных проектов от наших архитекторов</p>
                  <p>
                    Для строительства дома в первую очередь нужен проект. Наш архитектурный отдел уже спроектировал более 270
                    проектов современных энергоэффективных домов и коммерческих объектов. 3D-визуализацию, планировку и фото реализованных проектов смотрите
                    в нашем каталоге.
                  </p>
                  <p className="hidden-medium hidden-semimedium">
                    Любой проект в каталоге можно изменить как архитектурно так и визуально. Например, отразить зеркально, добавить/убрать террасу, крыльцо, или гараж для автомобиля, изменить планировку помещений
                    или размещение и форму окон и дверей. Фасад дома так же может быть выполнен в любом другом стиле. Для наших клиентов все изменения в проект вносятся бесплатно.
                  </p>
                  <Link to="/projects"><Button bsSize="large" bsStyle="green" className="catalogue" block>Смотреть все проекты</Button></Link>
                </Col>
                <Col md={7}>
                  <div className="popular-projects">
                    <div className="projects-label">Популярные проекты</div>
                    <ProjectsSlider projects={this.state.projects}/>
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

export default EighthPage
