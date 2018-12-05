import React from 'react'
import {Image, Grid, Row, Col, Button} from 'react-bootstrap'
import actionBanner from './ACTION.jpg'
import FadeTransition from '../../common/fade'
import ScrollToTopOnMount from '../../common/scrollToTopOnMount'
import Page from '../../layout/page'
import './newYear2019.css'
import {removeBackgroundImage, removeDarkColorScheme} from '../../common/main'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'
import {Link} from 'react-router-dom'

export default class extends React.Component {
  componentDidMount() {
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <div className="new-year-2019">
        <ScrollToTopOnMount/>
        <Helmet>
          <title>Половина дома в подарок от Сервус</title>
          <meta name="description" content="Акция от компании Сервус Винница - разыгрываем 60% стоимости дома"/>
        </Helmet>
        <FadeTransition shouldShow={true} timeout={1000} classNames="fade">
          <Page>
            <Row>
              <Grid fluid className="banner-wrapper">
                <Image src={actionBanner} className="action-banner" responsive/>
              </Grid>
            </Row>
            <div className="description-section">
              <Grid>
                <Row>
                  <Col md={12}>
                    <div className="description">Новый год — это время чудес, радости, счастья и улыбок! В этот сказочный праздник мы подготовили для наших клиентов чудесное предложение!
                      <br/>
                      <b>С 5 по 25 декабря 2018г. дарим <span className="text-danger text-bold">скидку 15%</span> на все дома Сервус</b>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="action-rules">
              <Grid>
                <h2 className="text-center">В период действия акции Вы получаете</h2>
                <Col md={12}>
                  <ul className="rules-list">
                    <li>
                      Скидку 15% на Домокомплект Сервус!*
                    </li>
                    <li>
                      Разработку индивидуального проекта дома - за наш счет!
                    </li>
                    <li>
                      Доставку домокомплекта на Ваш участок - за наш счет!
                    </li>
                  </ul>
                  <br/>
                  <div>
                    *Примечания:
                    <br/>
                    1. акция действует на комплектации <Link to="/price">«Стандарт» и «Стандарт Сервус»</Link>
                    <br/>
                    2. акционные условия действуют при оплате 40% стоимости Домокомплекта в период действия акции, и строительства дома до 1 мая 2019 г.
                  </div>
                </Col>
              </Grid>
            </div>

            <Row>
              <Grid fluid>
                <Row><div className="cta-projects text-center">
                  <h2 className="text-center">Выбирайте проект и бронируйте скидку</h2>
                  <div className="btn-action"><Link to="/projects"><Button bsStyle="danger" bsSize="large">Выбрать проект дома</Button></Link></div>
                </div></Row>
              </Grid>
            </Row>

            <Row>
              <Grid fluid>
                <Row><div className="cta-contacts text-center">
                  <h2 className="text-center">Узнайте подробности у наших консультантов</h2>
                  <div className="btn-action"><Link to="/contacts"><Button bsStyle="warning" bsSize="large">Посмотреть контакты</Button></Link></div>
                </div></Row>
              </Grid>
            </Row>
          </Page>
        </FadeTransition>
      </div>
    )
  }
}
