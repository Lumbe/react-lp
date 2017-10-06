import React from 'react'
import './fifthPage.css'
import {setWindowHeight,resetWindowHeight} from "../../common/main";
import {Row, Col, Image, Tab, Nav, NavItem} from 'react-bootstrap'
import sipImage from './sip.jpg'
import mitekImage from './mitek.jpg'
import neoporImage from './neopor.jpg'
import OwlCarousel from 'react-owl-carousel'
import '../../../css/owl.theme.servus.css'

class FifthPage extends React.Component {
  componentDidMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
  }

  importImages(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  render() {
    const certificates = this.importImages(require.context('./certificates', false, /\.(png|jpe?g|svg)$/));
    let certificateUrls = [];
    for (let src in certificates) {
      if (certificates.hasOwnProperty(src)) {
        certificateUrls.push(certificates[src])
      }
    }
    return (
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
                  <Nav  stacked>
                    <NavItem eventKey="first">
                      Технология<br/>
                      <b>SIP</b>
                    </NavItem>
                    <NavItem eventKey="second">
                      Технология<br/>
                      <b>Mitek</b>
                    </NavItem>
                    <NavItem eventKey="third">
                      SIP-панели<br/>
                      <b>с Neopor</b>
                    </NavItem>
                    <NavItem eventKey="fourth">
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
                          <p>Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Практический опыт показывает, что повышение уровня гражданского сознания обеспечивает актуальность существующих финансовых и административных условий. Дорогие друзья, постоянный количественный рост и сфера нашей активности играет важную роль в формировании ключевых компонентов планируемого обновления.</p>
                          <p>Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности позволяет выполнить...</p>
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
                          <p>Задача организации, в особенности же курс на социально-ориентированный национальный проект играет важную роль в формировании форм воздействия. Соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовке и реализации дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что повышение уровня гражданского сознания требует определения и уточнения дальнейших направлений развитая системы массового участия?</p>
                          <p>Задача организации, в особенности же курс на социально-ориентированный национальный проект играет...</p>
                        </Col>
                        <Col md={6}>
                          <div className="img-cover">
                            <div className="cover-frame"/>
                            <Image src={mitekImage} responsive/>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane><Tab.Pane eventKey="third">
                      <Row>
                        <Col md={6}>
                          <p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развитая системы массового участия? Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации существующих финансовых и административных условий. Задача организации, в особенности же социально-экономическое развитие позволяет оценить значение системы обучения кадров, соответствующей насущным потребностям?</p>
                          <p>Практический опыт показывает, что выбранный нами инновационный путь напрямую зависит от...</p>
                        </Col>
                        <Col md={6}>
                          <div className="img-cover">
                            <div className="cover-frame"/>
                            <Image src={neoporImage} responsive/>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane><Tab.Pane eventKey="fourth">
                      <Row>
                        <Col md={12}>
                          <OwlCarousel
                            className="owl-theme-servus"
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
                                <div key={index} className="certificate-item">
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
    </div>
    )
  }
}

export default FifthPage