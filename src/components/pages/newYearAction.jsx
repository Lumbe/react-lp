import React from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'
import actionBanner from './action2.jpg'
import FadeTransition from '../common/fade'
import ScrollToTopOnMount from '../common/scrollToTopOnMount'
import Page from '../layout/page'
import './newYearAction.css'
import {removeBackgroundImage, removeDarkColorScheme} from '../common/main'

class NewYearAction extends React.Component {
  componentDidMount() {
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <div>
        <FadeTransition shouldShow={true} timeout={1000} classNames="fade">
          <Page>
            <Grid>
              <ScrollToTopOnMount/>
              <h2 className="text-center">Новогодние подарки от Сервус</h2>
              <Image src={actionBanner} className="action-banner" responsive/>
              <br/>
              <br/>
              <Row>
                <Col md={12}><p>
                  К Новому году компания Сервус дарит подарки!
                </p>
                <p>
                  Комплектация «ДеЛюкс» (графитовый пенополистирол +20% к энергосбережению)по цене комплектации «Премиум».
                </p>
                <p>
                  К примеру дом 100 м2 — ВЫГОДА — 25000грн!<br/>
                  И это ещё не всё!
                </p>
                  <span>А также дополнительные скидки:</span>
                  <ul>
                    <li>-5% на монтаж домокомплекта</li>
                    <li>-5% на обустройство фасада</li>
                    <li>-5% на кровлю</li>
                    <li>-5% на окна</li>
                  </ul>
                  <p>Это предложение действует при заказе домокомплекта <strong className="text-danger ">с 01.12.17 по 31.12.17</strong></p>
    
                  <p>Выбрать проект Вы можете здесь или же можете предоставить свой. Всем своим заказчикам, компания Сервус:</p>
                  <ul>
                    <li>разрабатывает проект <strong className="text-danger">БЕСПЛАТНО</strong></li>
                    <li>осуществляет доставку домокомплекта по Украине <strong className="text-danger">БЕСПЛАТНО</strong></li>
                  </ul>
                  <p>Если Вы еще не были в наших домах, запишитесь на просмотр и почувствуйте тепло, которое компания Сервус дарит своим заказчикам.</p></Col>
              </Row>
            </Grid>
          </Page>
        </FadeTransition>
      </div>
    )
  }
}

export default NewYearAction

