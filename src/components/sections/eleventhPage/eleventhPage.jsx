import React from 'react'
import './eleventhPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Row, Col, Image} from 'react-bootstrap'
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

class EleventhPage extends React.Component {
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
    const iconLeft = "<span class='fa fa-angle-left fa-2x'/>";
    const iconRight = "<span class='fa fa-angle-right fa-2x'/>";
    return (<div className="eleventh-section">
        <h1 className="text-center"><span className="text-highlight"> Отзывы</span> о домах из СИП-панелей</h1>
        <p className="section-description text-center">Душа моя озарена неземной радостью...</p>
        <div className="client-reviews">
          <OwlCarousel
            className="owl-theme-reviews"
            items={3}
            margin={20}
            center={true}
            loop nav={true}
            navText={[iconLeft, iconRight]}
          >
            <div className="review-item">
              <div className="yt-cover">
                <div className="cover-frame"/>
                <Image src={review1} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
              <div className="review-desc">
                Роман Клос&nbsp;&nbsp;
                <span>
                  <FontAwesome name="map-marker"/>
                  &nbsp;г.Киев
                </span>
              </div>
            </div>
            <div className="review-item">
              <div className="yt-cover">
                <div className="cover-frame"/>
                <Image src={review2} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
              <div className="review-desc">
                Роман Клос&nbsp;&nbsp;
                <span>
                  <FontAwesome name="map-marker"/>
                  &nbsp;г.Киев
                </span>
              </div>
            </div>
            <div className="review-item">
              <div className="yt-cover">
                <div className="cover-frame"/>
                <Image src={review3} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
              <div className="review-desc">
                Роман Клос&nbsp;&nbsp;
                <span>
                  <FontAwesome name="map-marker"/>
                  &nbsp;г.Киев
                </span>
              </div>
            </div>
            <div className="review-item">
              <div className="yt-cover">
                <div className="cover-frame"/>
                <Image src={review4} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
              <div className="review-desc">
                Роман Клос&nbsp;&nbsp;
                <span>
                  <FontAwesome name="map-marker"/>
                  &nbsp;г.Киев
                </span>
              </div>
            </div>
            <div className="review-item">
              <div className="yt-cover">
                <div className="cover-frame"/>
                <Image src={review5} responsive/>
                <FontAwesome className="play-icon" name="play-circle" size="4x"/>
              </div>
              <div className="review-desc">
                Роман Клос&nbsp;&nbsp;
                <span>
                  <FontAwesome name="map-marker"/>
                  &nbsp;г.Киев
                </span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

export default EleventhPage
