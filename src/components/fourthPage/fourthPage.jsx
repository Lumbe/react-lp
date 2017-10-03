import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './bg-screen4.jpg'
import certificate1 from './euro_certificate_1.jpg'
import certificate2 from './euro_certificate_2.jpg'
import './fourthPage.css'
import './owl.theme.servus.css'
import {Row, Col, Image} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
// import {LinkContainer} from "react-router-bootstrap";

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark"
    }
  }

  componentDidMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
    removeBackgroundImage();
    removeDarkColorScheme();
  }
  render() {
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    return (
      <Row>
        <Col md={6}>
          <h1>Строим по <span className="text-highlight">европейским стандартам</span></h1>
          <h4>Соответствуют требованиям международного стандарта ISO 9001:2015</h4>
          <p>
            Компания Сервус строит энергосберегающие дома не только в Украине, но и в Европейском Союзе и ежегодно количество
            представительств только увеличивается. Уже построено более 80 зданий жилого и коммерческого назначения
            в Польше, Чехии, Словакии, Германии и Австрии.
            <br/>
            <br/>
            Каркасные дома Сервус из СИП-панелей показали отличные данные по энергоэффективности и получили
            <span className="text-highlight"> европейские сертификаты качества</span>.
            <br/>
            <br/>
            При производстве домокомплектов для строительства энергосберегающих домов как в Украине так и Европейском
            Союзе используются <span className="text-highlight">экологичные стройматериалы из Австрии и Польши</span>,
            а контроль качества в компании соответствует высоким требованиям международного стандарта ISO 9001:2015.
          </p>
        </Col>
        <Col md={4}>
          <OwlCarousel
            className="owl-theme-servus"
            items={1}
            margin={10}
            loop nav={true}
            navText={[iconLeft, iconRight]}
          >
            <div className="img-responsive">
              <Image src={certificate1}/>
            </div>
            <div className="img-responsive">
              <Image src={certificate2}/>
            </div>
          </OwlCarousel>
        </Col>
      </Row>
    )
  }
}

export default FourthPage
