import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen4.jpg'
import certificate1 from './euro_certificate_1.jpg'
import certificate2 from './euro_certificate_2.jpg'
import './owl.theme.servus.css'
import './fourthPage.css'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import _ from 'lodash'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 4,
      colorScheme: "dark",
      animateIn: true
    }
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
    window.onwheel = _.debounce((e) => {
      if (e.wheelDelta > 0) {
        let scrollToId = this.state.pageId - 1;
        this.props.goToPage(scrollToId);
      } else {
        let scrollToId = this.state.pageId + 1;
        this.props.goToPage(scrollToId);
      }
    }, 30);
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  handleNextPage() {
    let scrollToId = this.state.pageId + 1;
    return this.props.goToPage(scrollToId);
  }
  render() {
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="fourth-section"><Row>
              <Col md={6} className="euro-description">
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
                  <span className="hidden-medium"><br/>
                  <br/>
                  При производстве домокомплектов для строительства энергосберегающих домов как в Украине так и Европейском
                  Союзе используются <span className="text-highlight">экологичные стройматериалы из Австрии и Польши</span>,
                  а контроль качества в компании соответствует высоким требованиям международного стандарта ISO 9001:2015.</span>
                </p>
              </Col>
              <Col md={4} mdOffset={1}>
                  <OwlCarousel
                    className="owl-theme-servus"
                    items={1}
                    margin={10}
                    loop nav={true}
                    navText={[iconLeft, iconRight]}
                  >
                    <div className="certificate-item">
                      <Image src={certificate1} responsive/>
                    </div>
                    <div className="certificate-item">
                      <Image src={certificate2} responsive/>
                    </div>
                  </OwlCarousel>
              </Col>
            </Row></div>
          </Grid>
        <div onClick={this.handleNextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default FourthPage
