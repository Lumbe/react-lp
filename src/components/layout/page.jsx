import React from 'react'
import {Container} from 'reactstrap'

class Page extends React.Component {

  render() {
    return (
      <Container className='page'>
        {this.props.children}
      </Container>
    )
  }
}

export default Page
