import React from 'react'
import './staticFrame.css'
import {Button} from 'react-bootstrap'

class StaticFrame extends React.Component {
  render() {
    return (
      <div>
        <div className="top-frame"/>
        <div className="bottom-left-frame"/>
        <div className="bottom-right-frame"/>
        <div className="social-media">
          <div className="facebook social-item">
            <i className="fa fa-facebook fa-lg" aria-hidden="true"/>
          </div>
          <div className="instagram social-item">
            <i className="fa fa-instagram fa-lg" aria-hidden="true"/>
          </div>
          <div className="youtube social-item">
            <i className="fa fa-youtube-play fa-lg" aria-hidden="true"/>
          </div>
        </div>
        <div className="phone-number">
          <h4><span>+38 (096)</span> 888 50 50</h4>
        </div>
        <Button bsStyle="phone" className="callback-button">
          <span className="callback-text">Заказать звонок</span>
          <div className="bg-phone"><i className="fa fa-phone fa-lg" aria-hidden="true"/></div>
        </Button>
        <div className="next-page"/>
      </div>
    )

  }
}

export default StaticFrame