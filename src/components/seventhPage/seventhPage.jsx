import React from 'react'
import './seventhPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../common/main";
import {Row, Col, Image, Modal, Panel, Button} from 'react-bootstrap'
import backgroundImage from './bg-screen7.jpg'
import videoImage from './video.jpg'
import YouTube from 'react-youtube'
import FontAwesome from 'react-fontawesome'

class SeventhPage extends React.Component {
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
    const youtubeId = "sGXxdvpiMro";
    const modalDescription ="Мы взяли на себя все этапы строительства этого дома: от проектирования до выполнения внутренних работ, " +
      "что позволило очень быстро его построить в г.Жешув, Польша -всего за 4 месяца";
    const description = "Мы взяли на себя все этапы строительства этого дома: проектирование, обустройство фундамента," +
      "монтаж каркаса дома и кровельного материала, фасадные работы и разведение коммуникаций, а так же все внутренние работы." +
      "В итоге этот дом был построен очень быстро(г.Жешув, Польша) и уже через 4 месяца после начала работ заказчики праздновали новоселье.";
    return (<div className="seventh-section">
        <Row className="vertical-align">
          <Col md={6}>
            <h1>Строим дома "под ключ"<br/><span className="text-highlight">за 3 месяца</span></h1>
            <p className="section-description">По европейским стандартам из экологичных материалов</p>
            <p className="p-highlight">Комплект материалов для строительства дома изготавливается с высокой точностью на заводе, а монтаж конструкции осуществляется
              на вашем участке. Это дает возможность построить дом в кратчайшие сроки - заселиться можно уже через 3-4 месяца(зависит от
              площади дома и сложности конструкции)</p>
            <Button bsStyle="green">Узнать стоимость дома</Button>
          </Col>
          <Col md={6}>
            <Panel className="card">
              <div className="panel-header">
                <Row>
                  <Col md={7} sm={7} className="title">
                    <h3>Энергосберегающий дом "Сервус"</h3>
                    <p className="caption">
                      <FontAwesome name="map-marker"/>&nbsp;
                      г.Жешув, Польша
                    </p>
                  </Col>
                  <Col md={5} sm={5} className="square">
                    <div className="square-block">
                      <h2>186,92<span>кв.м.</span></h2>
                      <p className="caption">
                        площадь объекта
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <p className="description hidden-medium">{description}</p>
              <div className="text-center"><div className="yt-cover"  onClick={this.openModal.bind(this, youtubeId, modalDescription)}>
                <div className="cover-frame"/>
                <Image src={videoImage} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div></div>
            </Panel>
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

export default SeventhPage
