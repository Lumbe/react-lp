import React from 'react'
import './staticFrame.css'
import {Button} from 'react-bootstrap'
import DefaultModal from './defaultModal'
import CallbackForm from './forms/callbackForm'
import SuccessMessage from './forms/successMessage'
import ReactGA from 'react-ga'

class StaticFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      submitForm: false
    };
  }

  openModal() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview("/landing-footer-callback-btn");
    } else {
      console.log(`ga tracking: landing-footer-callback-btn modal opened!`)
    }
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
  }

  closeModal() {
    this.setState({showModal: false});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }
  render() {
    return (
      <div className="hidden-xs hidden-sm">
        <div className="top-frame"/>
        <div className="bottom-left-frame"/>
        <div className="bottom-right-frame"/>
        <div className="social-media">
          <ReactGA.OutboundLink
            eventLabel="facebook"
            to="https://www.facebook.com/servus.vinnitsa"
            rel="noopener"
            target="_blank"
            className="facebook social-item"
          >
            <i className="fa fa-facebook fa-lg"/>
          </ReactGA.OutboundLink>
          <ReactGA.OutboundLink
            eventLabel="instagram"
            to="https://www.instagram.com/servus.vinnitsa"
            rel="noopener"
            target="_blank"
           className="instagram social-item"
           >
            <i className="fa fa-instagram fa-lg"/>
          </ReactGA.OutboundLink>
          <ReactGA.OutboundLink
            eventLabel="youtube"
            to="https://www.youtube.com/channel/UCCOcPBZcf7h8Mz0bYR3lg5Q"
            target="_blank"
            rel="noopener"
            className="youtube social-item"
          >
            <i className="fa fa-youtube-play fa-lg"/>
          </ReactGA.OutboundLink>
        </div>
        <div className="phone-number">
          <h4><span>+38 (096)</span> 888 50 50</h4>
        </div>
        <Button bsStyle="phone" className="callback-button" onClick={this.openModal.bind(this)}>
          <span className="callback-text">Заказать звонок</span>
          <div className="bg-phone"><i className="fa fa-phone fa-lg"/></div>
        </Button>
        {/*<div className="next-page">*/}
          {/*<i className="fa fa-angle-down fa-2x"/>*/}
        {/*</div>*/}
        <DefaultModal
          show={this.state.showModal}
          onHide={this.closeModal.bind(this)}
          title="Получить консультацию"
        >
          {this.state.submitForm ?

            <SuccessMessage closeModal={this.closeModal.bind(this)}/>
            :
            <CallbackForm toggleFormSubmission={this.toggleFormSubmission.bind(this)}/>
          }
        </DefaultModal>
      </div>
    )

  }
}

export default StaticFrame
