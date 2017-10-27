import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './fade.css'

const FadeTransition = ({shouldShow=false, timeout, classNames, children}) => {
  return (
    <CSSTransition
      timeout={timeout}
      classNames={classNames}
      in={shouldShow}
      // appear={true}
      // mountOnEnter={true}
      // unmountOnExit={true}
    >
      {children}
    </CSSTransition>
  )
}

export default FadeTransition