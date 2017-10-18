import React from 'react'
import './staticFrame.css'
import {Button} from 'react-bootstrap'

class StaticFrame extends React.Component {
  render() {
    return (
      <div className="hidden-xs hidden-sm">
        <div className="top-frame"/>
        <div className="bottom-left-frame"/>
        <div className="bottom-right-frame"/>
        <div className="social-media">
          <a href="https://www.facebook.com/servuspodillya" rel="noopener noreferrer" target="_blank" className="facebook social-item">
            <i className="fa fa-facebook fa-lg"/>
          </a>
          <a href="#" className="instagram social-item">
            <i className="fa fa-instagram fa-lg" aria-hidden="true"/>
          </a>
          <a href="https://www.youtube.com/channel/UCCOcPBZcf7h8Mz0bYR3lg5Q" rel="noopener noreferrer" target="_blank" className="youtube social-item">
            <i className="fa fa-youtube-play fa-lg" aria-hidden="true"/>
          </a>
        </div>
        <div className="phone-number">
          <h4><span>+38 (096)</span> 888 50 50</h4>
        </div>
        <Button bsStyle="phone" className="callback-button">
          <span className="callback-text">Заказать звонок</span>
          <div className="bg-phone"><i className="fa fa-phone fa-lg" aria-hidden="true"/></div>
        </Button>
        <div className="next-page">
          <i className="fa fa-angle-down fa-2x" aria-hidden="true"/>
        </div>
      </div>
    )

  }
}

export default StaticFrame