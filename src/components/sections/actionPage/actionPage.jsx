import React from 'react'
import './actionPage.css'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";
import Helmet from 'react-helmet'
import banner from './freeBuild_banner2.jpg'
import backgroundImage from './bg-screen7.jpg'
import {removeBackgroundImage, setBackgroundImage} from "../../common/main";

class ActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      animateIn: true,
      pageId: 1,
      windowHeight: window.innerHeight && window.innerHeight - 250 || '100%'
    }
  }

  componentDidMount() {
    setBackgroundImage(backgroundImage);
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  render() {
    const {windowHeight} = this.state;
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Helmet>
            <title>Закажи дом - построим бесплатно</title>
            <meta name="description" lang="en" content="Условия акции: 1) Оплатить 40% стоимости домокомплекта в период с 10 октябра по 10 ноября 2018 года. 2) Произвести монтаж домокомплекта до 1 апреля 2019 года" />
            <script type="application/ld+json">{`
              {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://servus.vn.ua",
                    "name": "Сервус Винница",
                    "image": "https://servus.vn.ua/logo.jpg"
                  }
                },{
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": "https://servus.vn.ua/",
                    "name": "Технологии строительства"
                  }
                }]
              }
            `}</script>
          </Helmet>
          <Grid><Row><Col md={12}><div className="action-section" style={{height: windowHeight}}>
            {/*<h1 className="text-center"><span className="text-highlight">Строительство</span> энергосберегающих домов и коттеджей</h1>*/}
            <a href="https://special.servus.vn.ua/" target="_blank"><Image src={banner} responsive /></a>
          </div></Col></Row></Grid>
        <div onClick={this.props.nextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default ActionPage
