import React from 'react'
import './fifthPage.css'
import {Grid, Row, Col, Image, Tab, Nav, NavItem, Modal} from 'react-bootstrap'
import sipImage from './sip.jpg'
import mitekImage from './mitek-460.jpg'
import OwlCarousel from 'react-owl-carousel'
import './owl.theme.certificates.css'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import FontAwesome from 'react-fontawesome'
import YouTube from 'react-youtube'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";
import ReactGA from 'react-ga'

class FifthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      pageId: 5,
      showModal: false
    }
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
  }

  importImages(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  open() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview("/building-technology/mitek-farm-youtubeVideo");
    } else {
      console.log(`ga tracking: modal opened!`)
    }
  }

  close() {
    this.setState({showModal: false})

  }

  trackTab(name) {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview(`/building-technology/${name}`);
    } else {
      console.log(`ga tracking: click ${name}!`)
    }
  }

  render() {
    const certificates = this.importImages(require.context('./certificates', false, /\.(png|jpe?g|svg)$/));
    let certificateUrls = [];
    for (let src in certificates) {
      if (certificates.hasOwnProperty(src)) {
        certificateUrls.push(certificates[src])
      }
    }
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="fifth-section">
              <Row>
                <Col md={12}>
                  <h1 className="text-center"><span className="text-highlight">Технологии</span> строительства</h1>
                  <p className="section-description">С момента основания компании Сервус в 2005 году мы постепенно расширяли производственно-строительную
                    базу, внедряли инновационные технологии строительства, адаптировали канадскую технологию строительства
                    под наши климатеческие условия.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Tab.Container id="build-tech" defaultActiveKey="first">
                    <Row className="clearfix">
                      <Col md={2}>
                        <Nav stacked>
                          <NavItem eventKey="first" onClick={this.trackTab.bind(this, 'sip-tab')}>
                            Технология<br/>
                            <b>SIP</b>
                          </NavItem>
                          <NavItem eventKey="second" onClick={this.trackTab.bind(this, 'mitek-tab')}>
                            Технология<br/>
                            <b>Mitek</b>
                          </NavItem>
                          <NavItem eventKey="third" onClick={this.trackTab.bind(this, 'certificates-tab')}>
                            Сертификаты<br/>
                            <b>качества</b>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col md={10}>
                        <Tab.Content animation>
                          <Tab.Pane eventKey="first">
                            <Row>
                              <Col md={6}>
                                <p className="tech-description">При строительстве дома мы используем деревянный каркас и СИП панель
                                  (или сэндвич-панель) в качестве ограждающей конструкции. Для каркаса используется
                                  просушенный, пропитанный и обработанный защитными материалами брус, для перекрытий
                                  – двутавровые балки. СИП-панель производится на заводе «Сервус» и состоит из
                                  вспененного пенополистирола (производства Польши), размещенного между двумя ОСБ
                                  плитами Egger (производста Австрии) и проклеенного полиуретановым клеем с давлением
                                  более 15 тонн.  Такая технология строительства позволяет добиться впечатляющих
                                  показателей энергосбережения, прочности и скорости строительства. Высокие показатели
                                  энергосбережения позволяют использовать альтернативные источники энергии для отопления</p>
                              </Col>
                              <Col md={6} className="text-center">
                                <div className="img-cover">
                                  <div className="cover-frame"/>
                                  <Image src={sipImage} responsive/>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Row>
                              <Col md={6}>
                                <p className="tech-description">Технология MiTek – это американская система проектирования и сборки конструкций крыши
                                  с использованием запатентованного еще в 1950-х годах зубчатого крепежа фирмы MiTek.
                                  Состоит из комплексного инженерного решения, включающего программное обеспечение для
                                  подробного проектирования (с учетом ветров, влажности, объема осадков и температур в
                                  разные сезоны года), точный раскрой элементов на промышленных станках, а так же
                                  использование зубчатых пластин и фурнитуры Mitek для сборки стропильных ферм в
                                  заводских условиях
                                  Использование этой технологии позволяет нам добиться высокой точности и скорости
                                  сборки крыши – экономия времени может достигать 2-3 раза по сравнению с крышами,
                                  которые подгоняются по месту
                                </p>
                              </Col>
                              <Col md={6} className="text-center">
                                <div className="yt-cover" onClick={this.open.bind(this)}>
                                  <div className="cover-frame"/>
                                  <Image src={mitekImage} responsive/>
                                  <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <Row>
                              <Col md={12}>
                                <OwlCarousel
                                  className="owl-theme-certificates"
                                  items={4}
                                  margin={10}
                                  loop nav={true}
                                  responsiveClass={true}
                                  responsive={{
                                    0:{
                                      items: 1
                                    },
                                    768: {
                                      items: 2
                                    },
                                      // breakpoint from 768 up
                                    962: {
                                      items: 3
                                    },
                                      // breakpoint from 768 up
                                    1200: {
                                      items: 4
                                    }
                                  }}
                                >
                                  {certificateUrls.map((src, index) => {
                                    return (
                                      <div key={index}>
                                        <Image src={src} responsive/>
                                      </div>
                                    )
                                  })}
                                </OwlCarousel>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
              <Modal dialogClassName="yt-modal" keyboard={this.onHide} show={this.state.showModal} onHide={this.close.bind(this)}>
                <YouTube
                  videoId="zUBFAyCaLXU"
                  opts={opts}
                />
              </Modal>
          </div>
          </Grid>
        <div onClick={this.props.nextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default FifthPage
