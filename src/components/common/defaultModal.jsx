import React from 'react'
import {Modal} from 'react-bootstrap'
import './defaultModal.css'
import FontAwesome from 'react-fontawesome'

class DefaultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      title: 'Заголовок',
      footer: null,
      show: false
      // altForm: false
    }
  }

  open() {
    this.setState({showModal: true})
  }

  close() {
    this.setState({showModal: false})
  }

  render() {
    const title = this.props.title || this.state.title;
    const footer = this.props.footer || this.state.footer;
    const isShown = this.props.show || this.state.show;
    return (
        <Modal dialogClassName="default-modal" keyboard={this.onHide} show={isShown} onHide={this.props.onHide.bind(this)}>
          <Modal.Header>
            <a onClick={this.props.onHide.bind(this)} className="close-button"><FontAwesome name="times"/></a>
            <div className="form-badge">бесплатно</div>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {this.props.children}
          </Modal.Body>
          {footer &&  <Modal.Footer>
            {footer}
          </Modal.Footer>}
        </Modal>
    )
  }
}

export default DefaultModal