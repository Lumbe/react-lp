import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage} from "../common/main";
import backgroundImage from './bg-screen2.jpg'

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      // backgroundUrl: "/images/bg-screen.jpg"
    }
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
    return (<div>

    </div>
    )
  }
}

export default SecondPage
