import React from 'react'
import {Grid} from 'react-bootstrap';

class Page extends React.Component {

  render() {
    return (
      <Grid fluid>
        {this.props.children}
      </Grid>
    )
  }
}

export default Page
