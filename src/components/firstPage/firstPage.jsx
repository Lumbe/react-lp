import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './bg-screen1.jpg'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark"
    }
  }

  componentWillMount() {
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
      <p>First Page!</p>
    )
  }
}

export default FirstPage
