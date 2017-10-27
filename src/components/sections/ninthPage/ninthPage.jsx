import React from 'react'
import './ninthPage.css'
import {setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Grid, Row, Col} from 'react-bootstrap'
import backgroundImage from './bg-screen9.jpg'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import StaticFrame from '../../common/staticFrame'
import VerticalMenu from '../../layout/navigation/verticalMenu'

class NinthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animateIn: true};
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
  }


  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
        <Page>
          <StaticFrame/>
          <VerticalMenu/>
          <Grid>
            <div className="ninth-section vertical-align">
              <h1 className="text-center">Почему стоит выбрать<span className="text-highlight"> <span className="hidden-semimedium hidden-medium"><br/>энергосберегающие</span> дома Сервус</span></h1>
              <div className="advantages">
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-1"/>
                            </div>
                          </div>
                        </div>
                        <h4>Строим<br/> дом за 30 дней</h4>
                      </div>
                      <div className="description-wrapper">
                        <div className="description-block">
                          Готовый дом с наружной отделкой строится 30 дней. Готовый к заселению "дом под ключ" строится за 3-4 месяца (от подписания договора до заселения в дом)
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-2"/>
                            </div>
                          </div>
                        </div>
                        <h4>Экономия<br/> на отоплении до 80%</h4>
                      </div>
                      <div className="description-wrapper">
                        <div className="description-block">
                          Расходы на отопление дома меньше в 4-5 раз по сравнению с каменным домом, по-этому открываются альтернативные возможности при выборе приборов для отопления домов
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-3"/>
                            </div>
                          </div>
                        </div>
                        <h4>Строительство<br/> в любой сезон</h4>
                      </div>
                      <div className="description-wrapper">
                        <div className="description-block">
                          Канадская технология строительства позволяет строить в любое время года, даже зимой. Это может быть даже дешевле ввиду падения цен на стройматериалы
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-4"/>
                            </div>
                          </div>
                        </div>
                        <h4>Экологичность<br/> строения</h4>
                      </div>
                      <div className="description-wrapper">
                        <div className="description-block">
                          Используются только экологичные стройматериалы, прошедшие жесткую проверку Европейскими стандартами, где требования намного выше, чем в Украине.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-5"/>
                            </div>
                          </div>
                        </div>
                        <h4>Без усадки</h4>
                      </div>
                      <div className="description-wrapper one-lined">
                        <div className="description-block">
                          В канадской технологии строительства отсутствует усадка здания, благодаря чему отделочные работы можно начинать сразу после возведения дома
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-6"/>
                            </div>
                          </div>
                        </div>
                        <h4>Длительная<br/> эксплуатация</h4>
                      </div>
                      <div className="description-wrapper">
                        <div className="description-block">
                          Дома из SIP-панелей широко распространены в США и Канаде, расчетный срок службы не менее 80 лет при правильной эксплуатации
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-7"/>
                            </div>
                          </div>
                        </div>
                        <h4>Сейсмостойкость</h4>
                      </div>
                      <div className="description-wrapper one-lined">
                        <div className="description-block">
                          Канадские дома Сервус способны выдержать землетрясения силой до 9 баллов, а так же штормовые ветра
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <div className="icon-wrapper">
                      <div className="icon-block text-center">
                        <div className="outer-border">
                          <div className="inner-border">
                            <div className="icon-bg">
                              <div className="img-icon icon-7"/>
                            </div>
                          </div>
                        </div>
                        <h4>Огнеупорность</h4>
                      </div>
                      <div className="description-wrapper one-lined">
                        <div className="description-block">
                          При строительстве используются СИП-панели с негорючим наполнителем, а дерево обработано материалом, препятствующим возгоранию (классификация огнеупорности REI 60)
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Grid>
        </Page>
      </FadeTransition>
    )
  }
}

export default NinthPage
