import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {TransitionGroup} from 'react-transition-group'
import FadeTransition from '../fade'

class SuccessMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animateIn: false}
  }

  componentDidMount() {
    this.setState({animateIn: true})
  }

  render() {
    return (
      <TransitionGroup>
        <FadeTransition shouldShow={this.state.animateIn} timeout={1000} classNames="fade">
          <div className="text-center success-msg-block">
            <FontAwesome name="check-circle" size="4x" style={{ color: '#58b749' }}/>
            <br/>
            <p className="success-msg">Спасибо за обращение, Ваше сообщение отправлено.</p>
            <Button bsStyle="success" bsSize="large" onClick={this.props.closeModal}>OK</Button>
          </div>
        </FadeTransition>
      </TransitionGroup>
    )
  }
}

export default SuccessMessage