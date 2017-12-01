import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen1.jpg'
import './firstPage.css'
import {Grid, Nav, NavItem, Col} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 1,
      colorScheme: "dark",
      animateIn: true
    }
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Helmet>
            <title>Строительство энергосберегающих домов и коттеджей под ключ</title>
          </Helmet>
          <Grid>
            <Col md={12}>
              <div className="text-center heading-block">
                <div className='background-square'>
                  <div className="frame"/>
                </div>
                <div className=" heading-text">
                  <h3 className="hidden-xs"><span className="text-highlight">Строим по Европейским стандартам</span></h3>
                  <h1><span className="energy-header">Энергоэфективные</span> <br/>каркасные дома и коттеджи</h1>
                  <h3>в Виннице и Винницкой области</h3>
                </div>
              </div>
              <div className="heading-buttons">
                <Nav bsStyle="pills" justified>
                  <LinkContainer className="btn-simple" to="/price">
                    <NavItem eventKey={0.1}>Стоимость</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/about" className="btn-details">
                    <NavItem eventKey={0.2}>Подробнее</NavItem>
                  </LinkContainer>
                  <LinkContainer className="btn-simple" to="/house-projects">
                    <NavItem eventKey={0.3}>Проекты домов</NavItem>
                  </LinkContainer>
                  <Link to="/own-project" className="own-project">Уже есть проект дома?</Link>
                </Nav>
              </div>
            </Col>
          </Grid>
          <div onClick={this.props.nextPage.bind(this)} className="next-page">
            <i className="fa fa-angle-down fa-2x"/>
          </div>
        </Page>
      </FadeTransition>
    )
  }
}

export default FirstPage
