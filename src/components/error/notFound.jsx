import React from 'react'
import {setWindowHeight,resetWindowHeight} from "../common/main";

export default class NotFound extends React.Component {
  componentWillMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
  }

  render() {
    return <p>Страница не найдена</p>
  }
}
