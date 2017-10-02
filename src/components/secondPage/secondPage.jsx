import React from 'react'
import './secondPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../common/main";
import {Row, Col, Image, Modal} from 'react-bootstrap'
import backgroundImage from './bg-screen2.jpg'
import videoImage from './video.jpg'
import YouTube from 'react-youtube'
import FontAwesome from 'react-fontawesome'

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      showModal: false
    }
  }

  open() {
    this.setState({showModal: true})
  }

  close() {
    this.setState({showModal: false})

  }

  componentWillMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
  }


  componentWillUnmount() {
    resetWindowHeight();
    removeBackgroundImage();
    window.onresize = null;
  }

  render() {
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    return (<div className="second-section">
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
            <div className="adv-block">
              <span className="adv-number">12</span> <span className="adv-text">лет</span>
            </div>
            <p>на рынке энергосберегающего жилья</p>
          </Col>
          <Col md={2} xs={12}>
            <div className="adv-block">
              <span className="adv-number">1248</span>
            </div>
            <p>энергоэффективных зданий построено в Украине и ЕС</p>
          </Col>
          <Col md={2} xs={12}>
            <div className="adv-block">
              <span className="adv-number">150</span> <span className="adv-text">тыс</span>
            </div>
            <p>кв.м. недвижимости введено в эксплуатацию</p>
          </Col>
          <Col md={2} xs={12}>
            <div className="adv-block">
              <span className="adv-number">10</span> <span className="adv-text">лет</span>
            </div>
            <p>гарантийного обслуживания</p>
          </Col>
          <Col md={2} xs={12}>
            <div className="adv-block">
              <span className="adv-number">300</span>
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
    )
  }
}

export default SecondPage
