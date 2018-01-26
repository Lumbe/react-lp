import React from 'react'
import './eleventhPage.css'
import {setBackgroundImage, removeBackgroundImage, removeDarkColorScheme} from "../../common/main";
import {Grid, Image, Modal, Button} from 'react-bootstrap'
import backgroundImage from './bg-screen11.jpg'
import YouTube from 'react-youtube'
import FontAwesome from 'react-fontawesome'
import review1 from './images/review1.jpg'
import review2 from './images/review2.jpg'
import review3 from './images/review3.jpg'
import review4 from './images/review4.jpg'
import review5 from './images/review5.jpg'
import Slider from 'react-slick'
import './slick-theme-reviews.css'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

class EleventhPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 11,
      showModal: false,
      modalId: null,
      animateIn: true
    }
  }

  openModal(modalId) {
    this.setState({showModal: true, modalId: modalId});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview(`/reviews/watch?v=${modalId}`);
    } else {
      console.log(`ga tracking: modal with ID: ${modalId} opened!`)
    }
  }

  close() {
    this.setState({showModal: false, modalId: null})

  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
  }


  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  render() {
    const youtubeId1 = 'OtG2MON7UlY';
    const youtubeId2 = 'v6OGkP5mz7Q';
    const youtubeId3 = 'VMBcaU6A6uo';
    const youtubeId4 = '6JCILbYgowc';
    const youtubeId5 = 'lJt6uVAuGDo';
    const youtubeOpts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    const sliderOpts = {
      className: "slick-theme-reviews",
      centerMode: true,
      centerPadding: 0,
      slidesToShow: 3,
      arrows: true,
      draggable: false,
      swipe: true,
      responsive: [
        { breakpoint: 992,
          settings: { slidesToShow: 1 } },
        { breakpoint: 5000, settings: { slidesToShow: 3 } }
      ]
    };
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <Helmet>
            <title>Каркасные дома - отзывы владельцев</title>
            <meta name="description" content="Видео-отзывы о ✺ энергосберегающих каркасных домах из СИП-панелей от владельцев" />
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
                    "@id": "https://servus.vn.ua/reviews",
                    "name": "Отзывы"
                  }
                }]
              }
            `}</script>
          </Helmet>
          <Grid>
            <div className="eleventh-section">
              <h1 className="text-center"><span className="text-highlight"> Каркасные дома</span> отзывы владельцев</h1>
              <p className="section-description text-center">Отзывы наших клиентов</p>
              <div className="client-reviews">
                <Slider {...sliderOpts}>
                  <div className="review-item">
                    <div className="yt-cover" onClick={this.openModal.bind(this, youtubeId1)}>
                      <div className="cover-frame"/>
                      <Image src={review1} responsive/>
                      <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                    </div>
                    <div className="review-desc">
                      Левонько Виктория
                      <div>
                        <FontAwesome name="home"/>
                        &nbsp;Проект "Валери" 132кв.м.
                      </div>
                    </div>
                  </div>
                  <div className="review-item">
                    <div className="yt-cover" onClick={this.openModal.bind(this, youtubeId2)}>
                      <div className="cover-frame"/>
                      <Image src={review2} responsive/>
                      <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                    </div>
                    <div className="review-desc">
                      Роман Клос
                      <div>
                        <FontAwesome name="home"/>
                        &nbsp;Проект "Гелиос" 80кв.м.
                      </div>
                    </div>
                  </div>
                  <div className="review-item">
                    <div className="yt-cover" onClick={this.openModal.bind(this, youtubeId3)}>
                      <div className="cover-frame"/>
                      <Image src={review3} responsive/>
                      <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                    </div>
                    <div className="review-desc">
                      Олег и Юлия
                      <div>
                        <FontAwesome name="home"/>
                        &nbsp;Инд.проект 65кв.м.
                      </div>
                    </div>
                  </div>
                  <div className="review-item">
                    <div className="yt-cover" onClick={this.openModal.bind(this, youtubeId4)}>
                      <div className="cover-frame"/>
                      <Image src={review4} responsive/>
                      <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                    </div>
                    <div className="review-desc">
                      Вероника Танина
                      <div>
                        <FontAwesome name="home"/>
                        &nbsp;Инд.проект 150кв.м.
                      </div>
                    </div>
                  </div>
                  <div className="review-item">
                    <div className="yt-cover" onClick={this.openModal.bind(this, youtubeId5)}>
                      <div className="cover-frame"/>
                      <Image src={review5} responsive/>
                      <FontAwesome className="play-icon" name="play-circle" size="4x"/>
                    </div>
                    <div className="review-desc">
                      Зоряна и Павел
                      <div>
                        <FontAwesome name="home"/>
                        &nbsp;Проект "Ахил" 158кв.м.
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="text-center yt-reviews-link"><a rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PL1rM7N4FMIUCrw1QFGnkXOYqpjLgz1QUI" target="_blank">
                  <Button bsStyle="green">Посмотреть все отзывы</Button>
                </a></div>
              </div>
              <Modal dialogClassName="yt-modal" keyboard={this.onHide} show={this.state.showModal} onHide={this.close.bind(this)}>
                <YouTube
                  videoId={this.state.modalId}
                  opts={youtubeOpts}
                />
              </Modal>
            </div>
          </Grid>
        <div onClick={this.props.nextPage.bind(this)} className="next-page"><i className="fa fa-angle-down fa-2x"/></div></Page>
      </FadeTransition>
    )
  }
}

export default EleventhPage
