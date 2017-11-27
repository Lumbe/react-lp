import React from 'react'
import './secondPage.css'
import {setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Grid, Row, Col, Image, Modal} from 'react-bootstrap'
import backgroundImage from './bg-screen2.jpg'
import videoImage from './video.jpg'
import YouTube from 'react-youtube'
import FontAwesome from 'react-fontawesome'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";
import ReactGA from 'react-ga'

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 2,
      showModal: false,
      showComponent: false,
      animateIn: true
    }
  }

  open() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview("/about/watch?v=SDfBkztAchs");
    } else {
      console.log(`ga tracking: modal opened!`)
    }
  }

  close() {
    this.setState({showModal: false})

  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
  }


  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  render() {
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
            <div className="second-section">
              <Row>
                <Col md={4} className="text-center">
                  <div className="yt-cover"  onClick={this.open.bind(this)}>
                    <div className="cover-frame"/>
                    <Image src={videoImage} responsive/>
                    <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="company-info"><h1>Производственно строительная компания <span className="text-highlight">Сервус</span></h1>
                  <h4>Национальный производитель энергоэффективных домов</h4>
                  <p className="p-highlight">Строим энергосберегающие дома и коттеджи из СИП-панелей в Виннице и Винницкой области.
                    Компания Сервус первая в Украине представила канадскую технологию строительства и адаптировала
                    для строительства в нашей климатической зоне.<br/> Мы осуществляем полный цикл строительных работ -
                    от разработки проекта дома до сдачи объекта "под ключ". Проектируем, производим и строим в самые короткие сроки -
                    дом "под ключ" на 120кв.м. строится за 3 месяца. </p></div>
                </Col>
              </Row>
              <Row className="advantages">
                <Col md={2} xs={12}>
                  <div className="advantages-block">
                    <span className="advantages-number">12</span> <span className="advantages-text">лет</span>
                  </div>
                  <p>на рынке энергосберегающего жилья</p>
                </Col>
                <Col md={2} xs={12}>
                  <div className="advantages-block">
                    <span className="advantages-number">1248</span>
                  </div>
                  <p>энергоэффективных зданий построено в Украине и ЕС</p>
                </Col>
                <Col md={2} xs={12}>
                  <div className="advantages-block">
                    <span className="advantages-number">150</span> <span className="advantages-text">тыс</span>
                  </div>
                  <p>кв.м. недвижимости введено в эксплуатацию</p>
                </Col>
                <Col md={2} xs={12}>
                  <div className="advantages-block">
                    <span className="advantages-number">10</span> <span className="advantages-text">лет</span>
                  </div>
                  <p>гарантийного обслуживания</p>
                </Col>
                <Col md={2} xs={12}>
                  <div className="advantages-block">
                    <span className="advantages-number">300</span>
                  </div>
                  <p>работников компании трудятся для вас</p>
                </Col>
              </Row>
              <Modal dialogClassName="yt-modal" keyboard={this.onHide} show={this.state.showModal} onHide={this.close.bind(this)}>
                  <YouTube
                    videoId="SDfBkztAchs"
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

export default SecondPage
