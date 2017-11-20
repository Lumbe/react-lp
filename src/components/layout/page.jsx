import React from 'react'
import {Grid} from 'react-bootstrap';
import ReactGA from 'react-ga'

class Page extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    } else {
      console.log('ga tracking: page visited!')
    }
  }

  render() {
    return (
      <Grid fluid>
        {this.props.children}
      </Grid>
    )
  }
}

export default Page
