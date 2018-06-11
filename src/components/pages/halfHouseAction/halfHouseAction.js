import React from 'react'
import {Image, Grid, Row, Col, Button} from 'react-bootstrap'
import actionBanner from './60_banner_big.jpg'
import FadeTransition from '../../common/fade'
import ScrollToTopOnMount from '../../common/scrollToTopOnMount'
import Page from '../../layout/page'
import './halfHouseAction.css'
import {removeBackgroundImage, removeDarkColorScheme} from '../../common/main'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'
import {Link} from 'react-router-dom'
import Countdown from '../../common/countdown'

class HalfHouseAction extends React.Component {
  componentDidMount() {
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <div className="half-house-action">
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
                    <div className="description">В 2015 году в честь своего десятилетия компания Сервус провела акцию
                      в которой <b>разыграла половину
                    стоимости дома</b> среди всех участников, которые приобрели дом в период действия акции. Сегодня мы
                    хотим вспомнить как это было, и познакомить вас с победителями этого розыгрыша — семьей Литвинюк.
                    В этом году мы продолжаем эту замечательную традицию и разыгрываем уже 60% стоимости дома Сервус
                    приобретенного в период проведения акции <b>с 11.06 до 11.07.2018 года</b></div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="youtube-section">
              <Grid>
                <Row>
                  <Col md={12}>
                    <div className="youtube-video-wrapper"><YouTube videoId="CGzvodwpE0o" opts={{width: '100%'}} /></div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="action-rules">
              <Grid>
                <h2 className="text-center">Условия акции 60% стоимости дома В ПОДАРОК</h2>
                <Col md={6} sm={6} xs={12}>
                  <ul className="rules-list">
                    <li>
                      При оплате 40% стоимости выбранного Вами дома с 11.06 по 11.07.2018г.
                      Вы автоматически становитесь участником розыгрыша 60% стоимости дома
                    </li>
                    <li>
                      Все клиенты Сервус, которые оплатят 40% стоимости дома и не выиграют в розыгрыше гарантированно получат скидку 5% на домокомплект и 10% на монтаж дома
                    </li>
                    <li>
                      Акция действует на все дома Сервус а также индивидуальные проекты площадью до 300м.кв.
                    </li>
                  </ul>

                </Col>
                <Col md={6} sm={6} xs={12}>
                  <div className="countdown-timer text-center">
                    <h3>До розыгрыша осталось</h3>
                    <Countdown date="2018-07-11T00:00:00" />
                  </div>
                </Col>
              </Grid>
            </div>

            <Row>
              <Grid fluid>
                <Row><div className="cta text-center">
                  <h2 className="text-center">Узнайте подробности у наших консультантов</h2>
                  <div className="btn-action"><Link to="/contacts"><Button bsStyle="danger" bsSize="large">Контакты</Button></Link></div>
                </div></Row>
              </Grid>
            </Row>
          </Page>
        </FadeTransition>
      </div>
    )
  }
}

export default HalfHouseAction

