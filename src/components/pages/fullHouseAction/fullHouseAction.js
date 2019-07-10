import React from 'react'
import {Image, Grid, Row, Col, Button} from 'react-bootstrap'
import actionBanner from './MAIN-custom-new-3.jpg'
import FadeTransition from '../../common/fade'
import ScrollToTopOnMount from '../../common/scrollToTopOnMount'
import Page from '../../layout/page'
import './fullHouseAction.css'
import {removeBackgroundImage, removeDarkColorScheme} from '../../common/main'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'
import {Link} from 'react-router-dom'
import Countdown from '../../common/countdown'
import family from './img-2.jpg'

class FullHouseAction extends React.Component {
  componentDidMount() {
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <div className="full-house-action">
        <ScrollToTopOnMount/>
        <Helmet>
          <title>Дом в подарок от Сервус</title>
          <meta name="description" content="Акция от компании Сервус Винница - домокомплект в подарок!"/>
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
                    <div className="description">
                      <p className="head"><strong>Компания «Сервус» дарит новый дом</strong></p>
                      <br/>
                      Станьте участником акции «Дом в подарок» по случаю 14 летия Компании Сервус и живите в собственном доме уже через три месяца. Каждый участник акции получает возможность вернуть полную стоимость домокомплекта.
                      Всем участникам — дополнительные скидки</div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="action-rules">
              <Grid>
                <h2 className="text-center">Условия акции</h2>
                <Col md={6} sm={6} xs={12}>
                  <ul className="rules-list">
                    <li>
                      Заказать строительство дома у компании "Сервус" с 1 по 30 июля 2019 и внести 40% предоплаты за домокомплект
                    </li>
                    <li>
                      Все клиенты Сервус, которые оплатят 40% стоимости дома и не выиграют в розыгрыше гарантированно получат скидку 5% на домокомплект и 10% на монтаж дома
                    </li>
                    <li>
                      Проигравших нет - выигрывают все!
                    </li>
                  </ul>

                </Col>
                <Col md={6} sm={6} xs={12}>
                  <div className="countdown-timer text-center">
                    <h3>До розыгрыша осталось</h3>
                    <Countdown date="2019-07-31T15:00:00" />
                    {/*<div>*/}
                      {/*Прямая трансляция розыгрыша 60% стоимости дома будет происходить на канале YouTube <b>12 июля в 14:00 по Киевскому времени</b>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                    {/*<div className="btn-action"><a rel="noopener noreferrer" target="_blank" href="http://www.youtube.com/channel/UC945vgyx3C2pMhBYTE6SIPg"><Button bsStyle="danger" bsSize="large">Перейти на YouTube</Button></a></div>*/}
                  </div>
                </Col>
              </Grid>
            </div>
            <div className="youtube-section">
              <Grid>
                <Row>
                  <Col md={6} sm={6} xs={12}>
                    <div className="youtube-video-wrapper"><YouTube videoId="CGzvodwpE0o" opts={{width: '100%'}} /></div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div className="description">Знакомтесь — это семья Литвинюк. Они стали победителями акции от компании «Сервус» в 2015 году. Семья уже 4 года проживает в своем энергосберегающем доме</div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="youtube-section">
              <Grid>
                <Row>
                  <Col md={6} sm={6} xs={12}>
                    <div className="description">А в 2018 году победителями акции от компании «Сервус» стала семья Николая Поплавского из Винницы, выигравшего 60% стоимости дома в подарок. Для этой семьи участие в акции тоже очень помогло при планировании строительства собственного дома — теплого и уютного</div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div className="youtube-video-wrapper">
                      <Image responsive src={family}/>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="description-section">
              <Grid>
                <Row>
                  <Col md={12}>
                    <div className="description">
                      <b>
                      Более 1670 украинских семей оценили преимущества строительства по технологии Сервус. Мы строим быстро, дома по технологии Сервус теплые, комфортные и надежные
                      <br/>
                      <br/>
                      Залогом этого является четырнадцать лет опыта Компании Сервус в строительстве жилья и коммерческих сооружений в Украине и государствах Евросоюза, в частности Польши, Словакии, Италии
                      </b>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>

            <Row>
              <Grid fluid>
                <Row><div className="cta text-center">
                  <h2 className="text-center">Узнайте подробности у наших менеджеров</h2>
                  <p>НЕ ОТКЛАДЫВАЙТЕ ЖИЗНЬ НА ПОТОМ — СТРОЙТЕ СВОЙ ДОМ СЕГОДНЯ</p>
                  <div className="btn-action"><Link to="/contacts"><Button bsStyle="danger" bsSize="large">Подробнее</Button></Link></div>
                </div></Row>
              </Grid>
            </Row>
          </Page>
        </FadeTransition>
      </div>
    )
  }
}

export default FullHouseAction

