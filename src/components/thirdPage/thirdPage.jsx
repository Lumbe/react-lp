import React from 'react'
import './thirdPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../common/main";
import {Row, Col, Image, Modal, Panel, Button} from 'react-bootstrap'
import backgroundImage from './bg-screen3.jpg'
import videoImage1 from './morshyn.jpg'
import videoImage2 from './school.jpg'
import YouTube from 'react-youtube'
import FontAwesome from 'react-fontawesome'

class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      showModal: false,
      modalId: null,
      description: null
    }
  }

  openModal(modalId, desc) {
    this.setState({showModal: true, modalId: modalId, description: desc})
  }

  close() {
    this.setState({showModal: false, modalId: null})

  }

  componentDidMount() {
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
    const youtubeId1 = "05KLAEKYG-c";
    const youtubeId2 = "9drtluSlOw4";
    const description1 = "Индивидуальный проект с развитой инфраструктурой, который включает в себя 47 номеров," +
      " SPA-салон, рестораны, бары, большое лобби, спортзал и бани";
    const description2 = "Строительство велось в 10км от Киева. Так как в окрестностях не было других школ и садиков," +
      " этот объект был спроектирован и построен в кратчайшие сроки - всего за полгода, что бы успеть к 1 сентября";
    return (<div className="third-section">
        <Row>
          <Col md={12} className="text-center">
            <h1>Проектируем и строим <span className="text-highlight">большие объекты</span></h1>
            <h4>Коммерческого и социального назначения</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Panel className="card">
              <div className="panel-header">
                <Row>
                  <Col md={7} sm={7} className="title">
                    <h3>Гостиница</h3>
                    <p className="caption">
                      <FontAwesome name="map-marker"/>&nbsp;
                      г.Моршин, Львовская обл.
                    </p>
                  </Col>
                  <Col md={5} sm={5} className="square">
                    <div className="square-block">
                      <h2>4000 <span>кв.м.</span></h2>
                      <p className="caption">
                        площадь объекта
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <p className="description hidden-medium">{description1}</p>
              <div className="text-center"><div className="yt-cover" onClick={this.openModal.bind(this, youtubeId1, description1)}>
                <div className="cover-frame"/>
                <Image src={videoImage1} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div></div>
            </Panel>
          </Col>
          <Col md={6}>
            <Panel className="card">
              <div className="panel-header">
                <Row>
                  <Col md={7} sm={7} className="title">
                    <h3>Школа и садик</h3>
                    <p className="caption">
                      <FontAwesome name="map-marker"/>&nbsp;
                      г.Киев
                    </p>
                  </Col>
                  <Col md={5} sm={5} className="square">
                    <div className="square-block">
                      <h2>2400 <span>кв.м.</span></h2>
                      <p className="caption">
                        площадь объекта
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <p className="description hidden-medium">{description2}</p>
              <div className="text-center"><div className="yt-cover"  onClick={this.openModal.bind(this, youtubeId2, description2)}>
                <div className="cover-frame"/>
                <Image src={videoImage2} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div></div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <Button bsStyle="link" className="lp-link">
              Посмотреть все проекты&nbsp;&nbsp;
              <FontAwesome name="angle-right"/>
            </Button>
          </Col>
        </Row>
        <Modal dialogClassName="yt-modal" keyboard={this.onHide} show={this.state.showModal} onHide={this.close.bind(this)}>
          <YouTube
            videoId={this.state.modalId}
            opts={opts}
          />
          <Panel className="card">
            <p className="p-highlight">{this.state.description}</p>
          </Panel>
        </Modal>
    </div>
    )
  }
}

export default ThirdPage