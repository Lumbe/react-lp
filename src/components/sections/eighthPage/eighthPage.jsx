import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen8.jpg'
import './eighthPage.css'
import './owl.theme.projects.css'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import projectImage from './tallin.jpg'
import OwlCarousel from 'react-owl-carousel'
import ProjectDescription from './projectDescription'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import StaticFrame from '../../common/staticFrame'
import VerticalMenu from '../../layout/navigation/verticalMenu'

class EighthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark",
      animateIn: true
    }
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
  render() {
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    const header = <h3>Проект "Таллинн"</h3>;
    const footer = <Button bsStyle="link" className="btn-yellow">
      Узнать стоимость строительства
    </Button>;
    var projects = [];
    for (var i = 0; i<5;i++) {
      projects.push(<ProjectDescription header={header} footer={footer} projectImage={projectImage}/>);
    }
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <Page>
          <StaticFrame/>
          <VerticalMenu/>
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
                  <Button bsSize="large" bsStyle="green" className="catalogue" block>Смотреть все проекты</Button>
                </Col>
                <Col md={7}>
                  <div className="popular-projects">
                    <div className="projects-label">Популярные проекты</div>
                    <OwlCarousel
                      className="owl-theme-projects"
                      items={1}
                      margin={20}
                      loop nav={true}
                      navText={[iconLeft, iconRight]}
                      autoplay={true}
                      autoplayHoverPause={true}
                      smartSpeed={600}
                    >
                      {projects}
                    </OwlCarousel>
                  </div>
                </Col>
              </Row>
            </div>
          </Grid>
        </Page>
      </FadeTransition>
    )
  }
}

export default EighthPage
