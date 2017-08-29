import React from 'react'
// import {Container} from 'reactstrap'
import {Grid} from 'react-bootstrap';

class Page extends React.Component {

  render() {
    return (
      <Grid className='page'>
        {this.props.children}
      </Grid>
    )
  }
}

export default Page
