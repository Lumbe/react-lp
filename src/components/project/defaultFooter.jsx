import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'

export default class DefaultFooter extends React.Component {
  render() {
    return (
      <footer className="default-footer">
        <Grid className="footer">
          <Row>
            <Col md={3} className="phone-wrapper">
              <a href="tel:+380968885050"><div className="phone-number">
                <h4><span>+38 (096)</span> 888 50 50</h4>
              </div></a>
            </Col>
            <Col md={6}>
              <div className="social-media-footer">
                <a href="https://www.facebook.com/servuspodillya" rel="noopener noreferrer" target="_blank" className="facebook social-item">
                  <i className="fa fa-facebook fa-lg"/>
                </a>
                <a className="instagram social-item">
                  <i className="fa fa-instagram fa-lg"/>
                </a>
                <a href="https://www.youtube.com/channel/UCCOcPBZcf7h8Mz0bYR3lg5Q" rel="noopener noreferrer" target="_blank" className="youtube social-item">
                  <i className="fa fa-youtube-play fa-lg"/>
                </a>
              </div>
            </Col>
            <Col md={3} className="callback-wrapper">
              <Button bsStyle="phone" className="callback-button">
                <span className="callback-text">Заказать звонок</span>
                <div className="bg-phone"><i className="fa fa-phone fa-lg"/></div>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">Сервус Винница 2017</Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}