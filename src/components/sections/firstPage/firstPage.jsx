import React from 'react'
import {setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../../common/main";
import backgroundImage from './bg-screen1.jpg'
import './firstPage.css'
import {Grid, Nav, NavItem, Col} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import _ from 'lodash'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";

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
    window.onwheel = _.debounce((e) => {
      if (e.wheelDelta > 0) {
        let scrollToId = this.state.pageId - 1;
        this.props.goToPage(scrollToId);
      } else {
        let scrollToId = this.state.pageId + 1;
        this.props.goToPage(scrollToId);
      }
    }, 30);
  }

  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
    removeDarkColorScheme();
  }

  handleNextPage() {
    let scrollToId = this.state.pageId + 1;
    return this.props.goToPage(scrollToId);
  }
  
  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
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
                  <LinkContainer className="btn-simple" to="/10-page">
                    <NavItem eventKey={0.1}>Стоимость</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/2-page" className="btn-details">
                    <NavItem eventKey={0.2}>Подробнее</NavItem>
                  </LinkContainer>
                  <LinkContainer className="btn-simple" to="/8-page">
                    <NavItem eventKey={0.3}>Проекты домов</NavItem>
                  </LinkContainer>
                </Nav>
              </div>
            </Col>
          </Grid>
          <div onClick={this.handleNextPage.bind(this)} className="next-page">
            <i className="fa fa-angle-down fa-2x"/>
          </div>
        </Page>
      </FadeTransition>
    )
  }
}

export default FirstPage
