import React from 'react'
import {Grid} from 'react-bootstrap';
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

class Page extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(window.location.pathname + window.location.search);
      ReactPixel.pageView();
    } else {
      console.log('fb and ga tracking: pageview!')
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
