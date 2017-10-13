import React from 'react'
import './eleventhPage.css'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Row, Col} from 'react-bootstrap'
import backgroundImage from './bg-screen11.jpg'

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
    return (<div className="eleventh-section">
        <h1 className="text-center"><span className="text-highlight"> Отзывы</span> о домах из СИП-панелей</h1>
        <p className="section-description text-center">Душа моя озарена неземной радостью...</p>
      </div>
    )
  }
}

export default EleventhPage
