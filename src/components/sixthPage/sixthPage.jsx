import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './bg-screen6.jpg'
import './sixthPage.css'
import {Row, Col} from 'react-bootstrap'

class SixthPage extends React.Component {
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
    return (
      <div className="fourth-section">
        <Row>
          <Col md={2} mdOffset={1}>
            Icon 1
          </Col>
          <Col md={2}>
            Icon 2
          </Col>
          <Col md={2}>
            Icon 3
          </Col>
          <Col md={2}>
            Icon 4
          </Col>
          <Col md={2}>
            Icon 5
          </Col>
        </Row>
      </div>
    )
  }
}

export default SixthPage
