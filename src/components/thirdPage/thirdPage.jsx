import React from 'react'
import './thirdPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../common/main";
import {Row, Col, Image, Modal, Panel} from 'react-bootstrap'
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
    return (<div className="third-section">
        <Row>
          <Col md={12} className="text-center">
            <h1>Проектируем и строим <span className="text-highlight">большие объекты</span></h1>
            <h4>Коммерческого и социального назначения</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Panel>
              <div className="panel-header">
                <h2>Гостиница</h2>
                г.Моршин, Львовская обл.
                4000кв.м.
              </div>
              <p>Индивидуальный проект с развитой инфраструктурой, который
                включает в себя 47 номеров, SPA-салон, рестораны, бары,
                большое лобби, спортзал и бани</p>
              <div className="yt-cover"  onClick={this.open.bind(this)}>
                <div className="cover-frame"/>
                <Image src={videoImage1} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
            </Panel>
          </Col>
          <Col md={6}>
            <Panel>
              <div className="panel-header">
                <h2>Общеобразовательная школа и садик</h2>
                г.Киев
                2400кв.м.
              </div>
              <p>Строительство велось в 10км от Киева.Так как в окрестностях не было
                других школ и садиков, этот объект был спроектирован и построен в
              кратчайшие сроки - всего за полгода, что бы успеть к 1 сентября</p>
              <div className="yt-cover"  onClick={this.open.bind(this)}>
                <div className="cover-frame"/>
                <Image src={videoImage2} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
            </Panel>
          </Col>
        </Row>
      {/*<Row>*/}
        {/*<Col md={4} className="text-center">*/}
          {/*<div className="yt-cover"  onClick={this.open.bind(this)}>*/}
            {/*<div className="cover-frame"/>*/}
            {/*<Image src={videoImage} responsive/>*/}
            {/*<FontAwesome className="play-icon" name="play-circle" size="4x"/>*/}
          {/*</div>*/}
        {/*</Col>*/}
        {/*<Col md={8}>*/}
          {/*<div className="company-info"><h1>Производственно строительная компания <span className="text-highlight">Сервус</span></h1>*/}
          {/*<h4>Национальный производитель энергоэффективных домов</h4>*/}
          {/*<p className="p-highlight">Строим энергосберегающие дома и коттеджи из СИП-панелей в Виннице и Винницкой области.*/}
            {/*Компания Сервус первая в Украине представила канадскую технологию строительства и адаптировала*/}
            {/*для строительства в нашей климатической зоне.<br/> Мы осуществляем полный цикл строительных работ -*/}
            {/*от разработки проекта дома до сдачи объекта "под ключ". Проектируем, производим и строим в самые короткие сроки -*/}
            {/*дом "под ключ" на 120кв.м. строится за 3 месяца. </p></div>*/}
        {/*</Col>*/}
      {/*</Row>*/}
        {/*<Row className="advantages">*/}
          {/*<Col md={2} xs={12}>*/}
            {/*<div className="adv-block">*/}
              {/*<span className="adv-number">12</span> <span className="adv-text">лет</span>*/}
            {/*</div>*/}
            {/*<p>на рынке энергосберегающего жилья</p>*/}
          {/*</Col>*/}
          {/*<Col md={2} xs={12}>*/}
            {/*<div className="adv-block">*/}
              {/*<span className="adv-number">1248</span>*/}
            {/*</div>*/}
            {/*<p>энергоэффективных зданий построено в Украине и ЕС</p>*/}
          {/*</Col>*/}
          {/*<Col md={2} xs={12}>*/}
            {/*<div className="adv-block">*/}
              {/*<span className="adv-number">150</span> <span className="adv-text">тыс</span>*/}
            {/*</div>*/}
            {/*<p>кв.м. недвижимости введено в эксплуатацию</p>*/}
          {/*</Col>*/}
          {/*<Col md={2} xs={12}>*/}
            {/*<div className="adv-block">*/}
              {/*<span className="adv-number">10</span> <span className="adv-text">лет</span>*/}
            {/*</div>*/}
            {/*<p>гарантийного обслуживания</p>*/}
          {/*</Col>*/}
          {/*<Col md={2} xs={12}>*/}
            {/*<div className="adv-block">*/}
              {/*<span className="adv-number">300</span>*/}
            {/*</div>*/}
            {/*<p>работников компании трудятся для вас</p>*/}
          {/*</Col>*/}
        {/*</Row>*/}
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

export default ThirdPage
