import React from 'react'
import './eleventhPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Row, Col, Image, Modal} from 'react-bootstrap'
import backgroundImage from './bg-screen11.jpg'
import './owl.theme.reviews.css'
import YouTube from 'react-youtube'
import OwlCarousel from 'react-owl-carousel'
import FontAwesome from 'react-fontawesome'
import review1 from './images/review1.jpg'
import review2 from './images/review2.jpg'
import review3 from './images/review3.jpg'
import review4 from './images/review4.jpg'
import review5 from './images/review5.jpg'
import Slider from 'react-slick'

class EleventhPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      showModal: false,
      modalId: null
    }
  }

  openModal(modalId, position) {
    console.log('position', position);
    this.setState({showModal: true, modalId: modalId})
  }

  close() {
    this.setState({showModal: false, modalId: null})

  }

  componentDidMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
    // setDataAttributes();
    // clickHandler();
  }


  componentWillUnmount() {
    resetWindowHeight();
    removeBackgroundImage();
    window.onresize = null;
  }

  render() {
    const youtubeId1 = 'OtG2MON7UlY';
    const youtubeId2 = 'v6OGkP5mz7Q';
    const youtubeId3 = 'VMBcaU6A6uo';
    const youtubeId4 = '6JCILbYgowc';
    const youtubeId5 = 'lJt6uVAuGDo';
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    return (<div className="eleventh-section">
        <h1 className="text-center"><span className="text-highlight"> Отзывы</span> о домах из СИП-панелей</h1>
        <p className="section-description text-center">Душа моя озарена неземной радостью...</p>
        <div className="client-reviews">
          <OwlCarousel
            className="owl-theme-reviews"
            items={3}
            // margin={5}
            center={true}
            loop nav={true}
            navText={[iconLeft, iconRight]}
            responsiveClass={true}
            responsive={{
              0:{
                items: 1
              },
              768: {
                items: 1
              },
              // breakpoint from 768 up
              962: {
                items: 3
              },
              // breakpoint from 768 up
              1200: {
                items: 3
              }
            }}
          >
            <div className="review-item" onClick={this.openModal.bind(this, youtubeId1)}>
              <div className="yt-cover">
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
            <div className="review-item" onClick={this.openModal.bind(this, youtubeId2)}>
              <div className="yt-cover">
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
            <div className="review-item" onClick={this.openModal.bind(this, youtubeId3)}>
              <div className="yt-cover">
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
            <div className="review-item" onClick={this.openModal.bind(this, youtubeId4)}>
              <div className="yt-cover">
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
            <div className="review-item" onClick={this.openModal.bind(this, youtubeId5)}>
              <div className="yt-cover">
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
          </OwlCarousel>
        </div>
        <Modal dialogClassName="yt-modal" keyboard={this.onHide} show={this.state.showModal} onHide={this.close.bind(this)}>
          <YouTube
            videoId={this.state.modalId}
            opts={opts}
          />
        </Modal>
      </div>
    )
  }
}

// function setDataAttributes() {
//   let items = Array.from(document.getElementsByClassName('owl-stage')[0].children);
//   console.log(items);
//   items.forEach( (item, index) => {
//     item.setAttribute('data-position', index);
//   })
// }
//
// function clickHandler() {
//   document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('cover-frame')) {
//      // event.target.dispatchEvent('to.owl.carousel', event.target.data('position'));
//      console.log('to.owl.carousel', event.target);
//     }
//   }, false);
// }

export default EleventhPage
