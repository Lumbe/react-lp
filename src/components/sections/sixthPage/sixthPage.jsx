import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen6.jpg'
import './sixthPage.css'
import {Grid, Row, Col} from 'react-bootstrap'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import _ from 'lodash'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";

class SixthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 6,
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
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="sixth-section">
              <Row className="section-header">
                <Col md={12} className="text-center">
                  <h1>Этапы <span className="text-highlight">выполняемых работ</span></h1>
                  <p className="section-description">От заключения договора до заселения в дом</p>
                </Col>
              </Row>
              <Row className="steps">
                <Col md={2}>
                  <div className="icon-wrapper">
                    <div className="icon-block text-center">
                      <div className="outer-border">
                        <div className="inner-border">
                          <div className="icon-bg">
                            <div className="img-icon icon-1"/>
                          </div>
                        </div>
                      </div>
                      <h4>Выбор проекта дома</h4>
                    </div>
                    <div className="description-wrapper">
                      <div className="description-block">
                        Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="icon-wrapper">
                    <div className="icon-block text-center">
                      <div className="outer-border">
                        <div className="inner-border">
                          <div className="icon-bg">
                            <div className="img-icon icon-2"/>
                          </div>
                        </div>
                      </div>
                      <h4>Подписание договора</h4>
                    </div>
                    <div className="description-wrapper">
                      <div className="description-block">
                        Разрабатываем проект и пакет необходимых документов для получения
                        разрешения на строительство, предоплата за домокомплект
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="icon-wrapper">
                    <div className="icon-block text-center">
                      <div className="outer-border">
                        <div className="inner-border">
                          <div className="icon-bg">
                            <div className="img-icon icon-3"/>
                          </div>
                        </div>
                      </div>
                      <h4>Производство домокомплекта</h4>
                    </div>
                    <div className="description-wrapper">
                      <div className="description-block">
                        Производство д/к занимает 30 дней. Тем временем готовим участок для начала
                        работ (обустройство фундамента, коммуникаций)
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="icon-wrapper">
                    <div className="icon-block text-center">
                      <div className="outer-border">
                        <div className="inner-border">
                          <div className="icon-bg">
                            <div className="img-icon icon-4"/>
                          </div>
                        </div>
                      </div>
                      <h4>Строительные работы</h4>
                    </div>
                    <div className="description-wrapper">
                      <div className="description-block">
                        Возведение дома, обустройство кровли, монтаж энерго- сберегающих окон, обустйроство фасада,
                        внутренняя отделка и другие(оговаривается).
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="icon-wrapper">
                    <div className="icon-block text-center">
                      <div className="outer-border">
                        <div className="inner-border">
                          <div className="icon-bg">
                            <div className="img-icon icon-5"/>
                          </div>
                        </div>
                      </div>
                      <h4>Заселение в дом</h4>
                    </div>
                    <div className="description-wrapper">
                      <div className="description-block">
                        Уже через 90 дней Вы сможете заселиться в свой собственный энергосберегающий дом в Виннице.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Grid>
        <div onClick={this.handleNextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default SixthPage
