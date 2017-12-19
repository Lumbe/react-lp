import React from 'react'
import './thirteenthPage.css'
import {setBackgroundImage, removeBackgroundImage} from "../../common/main";
import {Grid, Row, Col, Button} from 'react-bootstrap'
import backgroundImage from './bg-screen13.jpg'
import ServusMap from './servusMap'
import DefaultModal from '../../common/defaultModal'
import AskForm from '../../common/forms/askForm'
import FadeTransition from '../../common/fade'
import Page from '../../layout/page'
import SuccessMessage from '../../common/forms/successMessage'
import ScrollToTopOnMount from "../../common/scrollToTopOnMount";
import ReactGA from 'react-ga'

class ThirteenthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      pageId: 13,
      showModal: false,
      modalId: null,
      animateIn: true,
      submitForm: false
    }
  }

  componentWillMount() {
    setBackgroundImage(backgroundImage);
  }


  componentWillUnmount() {
    this.setState({animateIn: false});
    removeBackgroundImage();
  }

  toggleFormSubmission() {
    this.setState({submitForm: !this.state.submitForm})
  }

  openModal() {
    this.setState({showModal: true});
    if (process.env.NODE_ENV === 'production') {
      ReactGA.modalview("/contacts/ask-us-modalForm");
    } else {
      console.log(`ga tracking: modal ask us opened!`)
    }
  }

  closeModal() {
    this.setState({showModal: false});
    if (this.state.submitForm) {
      setTimeout(() => {
        this.setState({submitForm: false})
      }, 1000);
    }
  }

  render() {
    return (
      <FadeTransition shouldShow={this.state.animateIn} timeout={650} classNames="fade">
        <Page>
          <ScrollToTopOnMount/>
          <Grid>
            <div className="thirteenth-section">
              <h1 className="text-center">Сервус<span className="text-highlight"> Винница</span></h1>
              <p className="section-description">
                <span className="text-highlight">"Сервус Винница"</span> - строительство энергосберегающих каркасных домов
                по канадской технологии в Виннице и Винницкой области. Более 1249 построенных
                домов в Украине и Европе, большой выбор типовых проектов. Индивидуальное проектирование
                энергоэффективного дома.
              </p>
              <Row>
                <Col md={4} mdPush={8} sm={12} xs={12}>
                  <h2 className="text-center hidden-medium"><span className="text-highlight">Контакты</span></h2>
                  <div className="panel-item">
                    <Col md={3}>
                      <div className="panel-icon">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="35px" height="35px" viewBox="0 0 35 35" enableBackground="new 0 0 35 35" xmlSpace="preserve">
                          <g>
                            <defs>
                              <rect id="SVGID_1_" width="35" height="35"/>
                            </defs>
                            <clipPath id="SVGID_2_">
                              <use xlinkHref="#SVGID_1_"  overflow="visible"/>
                            </clipPath>
                            <path clipPath="url(#SVGID_2_)" fill="#333333" d="M23.805,21.896l2.912-4.112c1.356-1.915,2.073-4.168,2.073-6.515
                              C28.79,5.056,23.735,0,17.48,0C11.265,0,6.21,5.056,6.21,11.27c0,2.347,0.718,4.599,2.073,6.515l2.912,4.112
                              C4.365,22.882,0,25.324,0,28.226C0,32.024,7.687,35,17.5,35S35,32.024,35,28.226C35,25.324,30.635,22.882,23.805,21.896
                               M9.205,17.132c-1.221-1.723-1.866-3.75-1.866-5.862c0-5.592,4.549-10.141,10.182-10.141c5.592,0,10.141,4.549,10.141,10.141
                              c0,2.112-0.645,4.138-1.866,5.862l-6.973,9.846c-0.304,0.428-0.797,0.683-1.322,0.683s-1.018-0.255-1.321-0.683L9.205,17.132z
                               M17.5,33.871c-9.793,0-16.371-2.919-16.371-5.645c0-2.272,4.525-4.475,10.802-5.291l3.327,4.696
                              c0.514,0.726,1.353,1.16,2.242,1.16c0.889,0,1.728-0.434,2.243-1.16l3.326-4.696c6.277,0.816,10.802,3.019,10.802,5.291
                              C33.871,30.952,27.293,33.871,17.5,33.871"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M25.403,11.29c0-4.358-3.545-7.903-7.903-7.903S9.597,6.932,9.597,11.29
                              s3.545,7.903,7.903,7.903S25.403,15.648,25.403,11.29 M10.726,11.29c0-3.735,3.039-6.774,6.774-6.774s6.774,3.039,6.774,6.774
                              s-3.039,6.774-6.774,6.774S10.726,15.026,10.726,11.29"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M21.452,15.806V11.29h2.067L17.5,6.024l-6.018,5.266h2.067v4.516H21.452z
                               M18.065,14.677h-1.129v-1.129h1.129V14.677z M20.323,14.677h-1.129v-2.258h-3.387v2.258h-1.129V11.29h5.645V14.677z M17.5,7.524
                              l3.014,2.637h-6.028L17.5,7.524z"/>
                          </g>
                        </svg>
                      </div>
                    </Col>
                    <Col md={9}>
                      Винница,<br/>
                      Хмельницкое Шоссе,<br/>
                      д.23
                    </Col>
                  </div>
                  <div className="panel-item">
                    <Col md={3}>
                      <div className="panel-icon">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="35px" height="35.001px" viewBox="0 0 35 35.001" enableBackground="new 0 0 35 35.001" xmlSpace="preserve">
                          <g>
                            <defs>
                              <rect id="SVGID_1_" y="0.001" width="35" height="35"/>
                            </defs>
                            <clipPath id="SVGID_2_">
                              <use xlinkHref="#SVGID_1_"  overflow="visible"/>
                            </clipPath>
                            <path clipPath="url(#SVGID_2_)" fill="#333333" d="M24.847,0.001H10.153c-1.416,0-2.57,1.153-2.57,2.57v29.86
                              c0,1.417,1.153,2.57,2.57,2.57h14.694c1.417,0,2.57-1.153,2.57-2.57V2.57C27.417,1.154,26.264,0.001,24.847,0.001 M8.75,4.667
                              H26.25v22.167H8.75V4.667z M10.153,1.167h14.694c0.774,0,1.404,0.629,1.404,1.403v0.93H8.75V2.57
                              C8.75,1.797,9.379,1.167,10.153,1.167 M24.847,33.834H10.153c-0.774,0-1.403-0.629-1.403-1.403v-4.43H26.25v4.43
                              C26.25,33.204,25.621,33.834,24.847,33.834"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M17.5,28.584c-1.287,0-2.333,1.047-2.333,2.333s1.047,2.333,2.333,2.333
                              c1.287,0,2.333-1.047,2.333-2.333S18.787,28.584,17.5,28.584 M17.5,32.084c-0.643,0-1.167-0.523-1.167-1.167
                              s0.523-1.167,1.167-1.167c0.643,0,1.167,0.523,1.167,1.167S18.143,32.084,17.5,32.084"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M15.167,2.917H17.5c0.323,0,0.583-0.261,0.583-0.583
                              c0-0.323-0.261-0.583-0.583-0.583h-2.333c-0.323,0-0.583,0.261-0.583,0.583C14.583,2.657,14.844,2.917,15.167,2.917"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M19.25,2.917h0.583c0.323,0,0.583-0.261,0.583-0.583
                              c0-0.323-0.261-0.583-0.583-0.583H19.25c-0.323,0-0.583,0.261-0.583,0.583C18.667,2.657,18.927,2.917,19.25,2.917"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M33.024,2.666c-0.228-0.228-0.597-0.228-0.825,0
                              c-0.228,0.228-0.228,0.597,0,0.825c2.179,2.179,2.179,5.725,0,7.905c-0.228,0.228-0.228,0.597,0,0.825
                              c0.114,0.114,0.263,0.171,0.412,0.171c0.149,0,0.299-0.057,0.412-0.171C35.659,9.587,35.659,5.3,33.024,2.666"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M30.568,3.994c-0.228-0.228-0.597-0.228-0.825,0
                              c-0.228,0.228-0.228,0.597,0,0.825c0.722,0.722,1.119,1.683,1.119,2.706s-0.397,1.984-1.119,2.706
                              c-0.228,0.228-0.228,0.597,0,0.825c0.114,0.114,0.263,0.171,0.412,0.171c0.149,0,0.299-0.057,0.412-0.171
                              c0.942-0.941,1.461-2.196,1.461-3.53S31.51,4.935,30.568,3.994"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M2.801,3.491c0.228-0.228,0.228-0.597,0-0.825
                              c-0.228-0.228-0.597-0.228-0.825,0c-2.634,2.634-2.634,6.921,0,9.555c0.114,0.114,0.263,0.171,0.412,0.171
                              c0.149,0,0.299-0.057,0.412-0.171c0.228-0.228,0.228-0.597,0-0.825C0.621,9.217,0.621,5.671,2.801,3.491"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M5.257,3.832c-0.228-0.228-0.597-0.228-0.825,0
                              C3.49,4.774,2.972,6.028,2.972,7.363c0,1.335,0.519,2.589,1.461,3.531c0.114,0.114,0.263,0.171,0.412,0.171
                              c0.149,0,0.299-0.057,0.412-0.171c0.228-0.228,0.228-0.597,0-0.825C4.536,9.347,4.138,8.386,4.138,7.363s0.397-1.984,1.119-2.706
                              C5.485,4.43,5.485,4.061,5.257,3.832"/>
                          </g>
                        </svg>
                      </div>
                    </Col>
                    <Col md={9}>
                      +38 (096) 888-50-50
                    </Col>
                  </div>
                  <div className="panel-item">
                    <Col md={3}>
                      <div className="panel-icon">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="35px" height="35px" viewBox="0 0 35 35" enableBackground="new 0 0 35 35" xmlSpace="preserve">
                          <g>
                            <defs>
                              <rect id="SVGID_1_" y="1.27" width="35" height="32.46"/>
                            </defs>
                            <clipPath id="SVGID_2_">
                              <use xlinkHref="#SVGID_1_"  overflow="visible"/>
                            </clipPath>
                            <path clipPath="url(#SVGID_2_)" fill="#333333" d="M34.741,14.717L34.741,14.717l-4.469-2.963V1.85c0-0.32-0.26-0.58-0.58-0.58
                              H5.308c-0.32,0-0.58,0.26-0.58,0.58v9.904l-4.468,2.962l0,0C0.103,14.82,0,14.998,0,15.2v17.951c0,0.32,0.26,0.58,0.58,0.58H34.42
                              c0.32,0,0.58-0.26,0.58-0.58V15.2C35,14.998,34.897,14.82,34.741,14.717z M4.728,16.744L2.91,15.779h1.818V16.744z M1.159,16.163
                              l13.331,7.071L1.159,32.071V16.163z M17.5,22.63l14.997,9.941H2.503L17.5,22.63z M20.51,23.235l13.331-7.071v15.908L20.51,23.235z
                               M30.271,15.779h1.819l-1.819,0.965V15.779z M32.497,14.62h-2.225v-1.475L32.497,14.62z M29.112,2.43v14.929l-9.702,5.146
                              l-1.59-1.054c-0.194-0.129-0.446-0.129-0.641,0l-1.59,1.054l-9.702-5.147V2.43H29.112z M4.728,14.62H2.503l2.225-1.475V14.62z"/>
                            <path clipPath="url(#SVGID_2_)" fill="#58B749" d="M17.5,17.906h5.834c0.404,0,0.732-0.328,0.732-0.732
                              c0-0.404-0.328-0.732-0.732-0.732H17.5c-2.813,0-5.102-2.289-5.102-5.102v-0.216c0-2.813,2.289-5.102,5.102-5.102
                              c2.813,0,5.102,2.289,5.102,5.102v0.54c0,0.609-0.495,1.105-1.104,1.105c-0.609,0-1.105-0.495-1.105-1.105v-1.026
                              c0-1.744-1.419-3.163-3.163-3.163s-3.163,1.419-3.163,3.163c0,1.744,1.419,3.163,3.163,3.163c0.798,0,1.527-0.297,2.084-0.786
                              c0.453,0.731,1.263,1.218,2.184,1.218c1.417,0,2.569-1.152,2.569-2.569v-0.54c0-3.621-2.946-6.567-6.567-6.567
                              c-3.621,0-6.567,2.946-6.567,6.567v0.216C10.933,14.961,13.879,17.906,17.5,17.906z M17.229,12.336
                              c-0.937,0-1.699-0.762-1.699-1.699c0-0.937,0.762-1.699,1.699-1.699c0.937,0,1.699,0.762,1.699,1.699
                              C18.928,11.574,18.166,12.336,17.229,12.336"/>
                          </g>
                        </svg>
                      </div>
                    </Col>
                    <Col md={9}>
                      <span className="email-item">office@servus.vn.ua</span>
                    </Col>
                  </div>
                  <Button onClick={this.openModal.bind(this)} bsStyle="green" bsSize="lg" className="btn-block">Задать вопрос</Button>
                </Col>
                <Col md={8} mdPull={4} sm={12} xs={12}>
                  <div className="map-wrapper">
                    <ServusMap/>
                  </div>
                </Col>
              <DefaultModal
                show={this.state.showModal}
                onHide={this.closeModal.bind(this)}
                title="Задайте вопрос"
              >
                {this.state.submitForm ?
                  <SuccessMessage closeModal={this.closeModal.bind(this)}/>
                :
                  <AskForm toggleFormSubmission={this.toggleFormSubmission.bind(this)}/>
                }

              </DefaultModal>
              </Row>
            </div>
          </Grid>
        </Page>
      </FadeTransition>
    )
  }
}

export default ThirteenthPage
