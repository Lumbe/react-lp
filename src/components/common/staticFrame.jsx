import React from 'react'
import './staticFrame.css'
import {Button} from 'react-bootstrap'
import DefaultModal from './defaultModal'
import CallbackForm from './callbackForm'

class StaticFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false})
  }
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
            <i className="fa fa-instagram fa-lg"/>
          </a>
          <a href="https://www.youtube.com/channel/UCCOcPBZcf7h8Mz0bYR3lg5Q" rel="noopener noreferrer" target="_blank" className="youtube social-item">
            <i className="fa fa-youtube-play fa-lg"/>
          </a>
        </div>
        <div className="phone-number">
          <h4><span>+38 (096)</span> 888 50 50</h4>
        </div>
        <Button bsStyle="phone" className="callback-button" onClick={this.openModal.bind(this)}>
          <span className="callback-text">Заказать звонок</span>
          <div className="bg-phone"><i className="fa fa-phone fa-lg"/></div>
        </Button>
        <div className="next-page">
          <i className="fa fa-angle-down fa-2x"/>
        </div>
        <DefaultModal
          show={this.state.showModal}
          onHide={this.closeModal.bind(this)}
          title="Получить консультацию"
        >
          <CallbackForm/>
        </DefaultModal>
      </div>
    )

  }
}

export default StaticFrame