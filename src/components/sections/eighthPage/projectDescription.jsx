import React from 'react'
import {Row, Col, Image, Panel} from 'react-bootstrap'

class ProjectDescription extends React.Component {
  render() {
    return (
      <div className="project-item">
        <Image src={this.props.projectImage}/>
        <div className="project-description">
          <Panel header={this.props.header} footer={this.props.footer}>
            <div className="project-details"><Row className="table-row">
              <Col md={1} xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px" height="20px">
                  <path fillRule="evenodd"  fill="rgb(42, 118, 30)"
                        d="M18.709,5.126 L18.709,16.775 L19.787,16.775 C19.867,16.775 19.939,16.823 19.969,16.897 C20.000,16.971 19.983,17.057 19.926,17.114 L18.186,18.861 C18.109,18.938 17.984,18.938 17.907,18.861 L16.167,17.114 C16.111,17.057 16.094,16.971 16.125,16.897 C16.155,16.823 16.227,16.775 16.306,16.775 L17.384,16.775 L17.384,5.126 L16.306,5.126 C16.227,5.126 16.155,5.078 16.125,5.003 C16.094,4.929 16.111,4.845 16.167,4.788 L17.907,3.040 C17.984,2.962 18.109,2.962 18.186,3.040 L19.926,4.788 C19.983,4.845 20.000,4.929 19.969,5.003 C19.939,5.078 19.867,5.126 19.787,5.126 L18.709,5.126 ZM15.145,3.817 C15.088,3.873 15.004,3.890 14.930,3.859 C14.856,3.828 14.809,3.756 14.809,3.676 L14.809,2.593 L3.210,2.593 L3.210,3.676 C3.210,3.756 3.162,3.828 3.088,3.859 C3.014,3.890 2.930,3.873 2.873,3.817 L1.133,2.068 C1.056,1.990 1.056,1.866 1.133,1.788 L2.873,0.041 C2.930,-0.016 3.014,-0.034 3.088,-0.002 C3.162,0.028 3.210,0.100 3.210,0.180 L3.210,1.262 L14.809,1.262 L14.809,0.180 C14.809,0.100 14.856,0.028 14.930,-0.002 C15.004,-0.034 15.088,-0.016 15.145,0.041 L16.885,1.788 C16.962,1.866 16.962,1.990 16.885,2.068 L15.145,3.817 ZM15.239,5.692 L15.239,19.001 C15.239,19.552 14.794,19.999 14.245,19.999 L0.994,19.999 C0.445,19.999 -0.000,19.552 -0.000,19.001 L-0.000,5.692 C-0.000,5.140 0.445,4.693 0.994,4.693 L14.245,4.693 C14.794,4.693 15.239,5.140 15.239,5.692 ZM13.251,6.690 L1.988,6.690 L1.988,18.003 L13.251,18.003 L13.251,6.690 Z"/>
                </svg>
              </Col>
              <Col md={5} xs={11} className="icon-caption">
                Площадь: <b>125м<sup>2</sup></b>
              </Col>
              <div className="clearfix visible-sm-block visible-xs-block"/>
              <Col md={1} xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px" y="0px"
                  width="20px" height="20px" viewBox="0 0 20 20"
                  enableBackground="new 0 0 20 20" xmlSpace="preserve">
                  <path fill="#2A761E" d="M17.2,7.884h-0.261l-0.849-3.677c-0.231-1.032-1.455-1.763-2.909-1.763H6.822
                                c-1.455,0-2.682,0.727-2.909,1.763l-0.83,3.677H2.8c-0.996,0-1.8,0.804-1.8,1.8v4.941c0,0.996,0.804,1.8,1.8,1.8h1.495v1.113
                                c0,0.422,0.345,0.768,0.768,0.768s0.768-0.345,0.768-0.768v-1.109h8.35v1.109c0,0.422,0.345,0.768,0.768,0.768
                                c0.422,0,0.768-0.345,0.768-0.768v-1.109H17.2c0.996,0,1.8-0.804,1.8-1.8V9.684C19,8.689,18.196,7.884,17.2,7.884z M10.536,7.848
                                c0.022-0.595,0.511-1.073,1.109-1.073c0.599,0,1.091,0.478,1.109,1.073H10.536z M5.404,4.516c0.037-0.191,0.613-0.573,1.418-0.573
                                h6.359c0.804,0,1.378,0.382,1.418,0.573l0.768,3.332h-1.15c-0.022-1.4-1.161-2.568-2.604-2.568c-1.403,0-2.582,1.128-2.604,2.568
                                H4.637L5.404,4.516z M17.505,14.625c0,0.154-0.154,0.305-0.305,0.305H2.8c-0.154,0-0.305-0.154-0.305-0.305V9.684
                                c0-0.154,0.154-0.305,0.305-0.305h14.4c0.154,0,0.305,0.154,0.305,0.305V14.625z"/>
                  <path fill="#2A761E" d="M5.518,11.371h-0.5c-0.422,0-0.768,0.345-0.768,0.768s0.345,0.768,0.768,0.768h0.5
                                c0.422,0,0.768-0.345,0.768-0.768S5.941,11.371,5.518,11.371z"/>
                  <path fill="#2A761E" d="M14.978,11.371h-0.496c-0.422,0-0.768,0.345-0.768,0.768s0.345,0.768,0.768,0.768h0.5
                                c0.382,0,0.768-0.345,0.768-0.768C15.745,11.716,15.4,11.371,14.978,11.371z"/>
                </svg>
              </Col>
              <Col md={5} xs={11} className="icon-caption">
                Гараж: <b>на 1 авто</b>
              </Col>
            </Row>
              <Row className="table-row">
                <Col md={1} xs={1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20px" height="20px" viewBox="0 0 20 20"
                    enableBackground="new 0 0 20 20"
                    xmlSpace="preserve">
                    <g>
                      <g>
                        <path fill="#2A761E" d="M18.598,5.213l-8.273-4.136c-0.205-0.102-0.446-0.102-0.65,0L1.402,5.213C1.156,5.336,1,5.588,1,5.863
                                c0,0.275,0.156,0.527,0.402,0.65l8.273,4.136c0.102,0.051,0.214,0.077,0.325,0.077c0.111,0,0.223-0.026,0.325-0.077l8.273-4.136
                                C18.844,6.391,19,6.139,19,5.863C19,5.588,18.844,5.336,18.598,5.213z M10,9.187L3.353,5.863L10,2.54l6.647,3.323L10,9.187z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path fill="#2A761E" d="M18.923,13.811c-0.18-0.359-0.616-0.505-0.976-0.325L10,17.46l-7.948-3.974
                                c-0.359-0.18-0.796-0.034-0.976,0.325c-0.18,0.359-0.034,0.796,0.325,0.976l8.273,4.136C9.777,18.974,9.889,19,10,19
                                c0.111,0,0.223-0.026,0.325-0.077l8.273-4.136C18.957,14.607,19.103,14.17,18.923,13.811z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path fill="#2A761E" d="M18.923,9.675c-0.18-0.359-0.616-0.505-0.976-0.325L10,13.323L2.052,9.349
                                C1.693,9.17,1.257,9.315,1.077,9.675c-0.18,0.359-0.034,0.796,0.325,0.976l8.273,4.136c0.102,0.051,0.214,0.077,0.325,0.077
                                c0.111,0,0.223-0.026,0.325-0.077l8.273-4.136C18.957,10.471,19.103,10.034,18.923,9.675z"/>
                      </g>
                    </g>
                  </svg>
                </Col>
                <Col md={5} xs={11} className="icon-caption">
                  Этажность: <b>2</b>
                </Col>
                <div className="clearfix visible-sm-block visible-xs-block"/>
                <Col md={1} xs={1} className="hidden-semimedium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px"
                    width="20px" height="20px" viewBox="0 0 20 20"
                    enableBackground="new 0 0 20 20"
                    xmlSpace="preserve">
                    <g display="none">
                      <g display="inline">
                        <path fill="#2A761E" d="M-56.338,61.458h-34.091V27.367c0-6.276-5.088-11.364-11.364-11.364c-6.275,0-11.363,5.088-11.363,11.364
                                  v45.455v45.455c0,6.276,5.088,11.364,11.364,11.364s11.364-5.088,11.364-11.364V84.186h22.727v34.091
                                  c0,6.276,5.088,11.364,11.364,11.364s11.364-5.088,11.364-11.364V72.822C-44.975,66.546-50.063,61.458-56.338,61.458z"/>
                      </g>
                    </g>
                    <g display="none">
                      <g display="inline">
                        <path fill="#2A761E" d="M125.48,16.003c-6.276,0-11.364,5.088-11.364,11.364v34.091H80.025c-6.276,0-11.364,5.088-11.364,11.364
                                  v45.455c0,6.276,5.088,11.364,11.364,11.364s11.364-5.088,11.364-11.364V84.186h22.727v34.091c0,6.276,5.088,11.364,11.364,11.364
                                  c6.276,0,11.364-5.088,11.364-11.364V72.822V27.367C136.844,21.091,131.756,16.003,125.48,16.003z"/>
                      </g>
                    </g>
                    <g display="none">
                      <g display="inline">
                        <path fill="#2A761E" d="M134.408-24.186c-12.224-21.123-29.791-38.839-50.802-51.231C61.94-88.198,37.125-94.952,11.843-94.952
                                  c-25.281,0-50.096,6.755-71.763,19.535c-21.01,12.393-38.577,30.108-50.801,51.231c-2.034,3.516-2.038,7.85-0.009,11.369
                                  c2.029,3.519,5.783,5.687,9.844,5.687H0.479v30.71h-26.515c-6.276,0-11.364,5.088-11.364,11.364s5.088,11.364,11.364,11.364H0.479
                                  v71.969c0,6.276,5.088,11.364,11.364,11.364c6.276,0,11.364-5.088,11.364-11.364v-71.97h26.515
                                  c6.276,0,11.364-5.088,11.364-11.364s-5.088-11.364-11.364-11.364H23.207v-30.71h101.366c4.062,0,7.814-2.168,9.844-5.687
                                  C136.447-16.336,136.443-20.67,134.408-24.186z M-79.059-29.857c22.381-26.527,55.658-42.368,90.903-42.368
                                  s68.522,15.841,90.903,42.368H-79.059z"/>
                      </g>
                    </g>
                    <g>
                      <path fill="#2A761E" d="M14.831,13.153c0.328,0,0.594-0.266,0.594-0.594s-0.266-0.594-0.594-0.594H5.294
                                c-0.328,0-0.594,0.266-0.594,0.594s0.266,0.594,0.594,0.594h4.175v5.753c0,0.328,0.266,0.594,0.594,0.594s0.594-0.266,0.594-0.594
                                v-5.753L14.831,13.153z"/>
                      <path fill="#2A761E" d="M6.766,15.087H2.716V11.05c0-0.328-0.266-0.594-0.594-0.594s-0.594,0.266-0.594,0.594v7.856
                                c0,0.328,0.266,0.594,0.594,0.594s0.594-0.266,0.594-0.594v-2.632h3.456v2.632c0,0.328,0.266,0.594,0.594,0.594
                                c0.328,0,0.594-0.266,0.594-0.594v-3.226C7.359,15.353,7.094,15.087,6.766,15.087z"/>
                      <path fill="#2A761E" d="M17.877,10.457c-0.328,0-0.594,0.266-0.594,0.594v4.036h-4.049c-0.328,0-0.594,0.266-0.594,0.594v3.226
                                c0,0.328,0.266,0.594,0.594,0.594c0.328,0,0.594-0.266,0.594-0.594v-2.632h3.455v2.632c0,0.328,0.266,0.594,0.594,0.594
                                s0.594-0.266,0.594-0.594V11.05C18.471,10.722,18.205,10.457,17.877,10.457z"/>
                      <path fill="#2A761E" d="M2.29,6.551h7.18v3.234c0,0.328,0.266,0.594,0.594,0.594c0.328,0,0.594-0.266,0.594-0.594V6.551h7.221
                                c0.265,0,0.498-0.176,0.571-0.43c0.073-0.255-0.032-0.527-0.257-0.667L10.377,0.59C10.185,0.47,9.94,0.47,9.748,0.59L1.975,5.454
                                C1.75,5.595,1.646,5.867,1.719,6.121C1.792,6.376,2.025,6.551,2.29,6.551z M10.064,1.793l5.736,3.57H4.358L10.064,1.793z"/>
                    </g>
                  </svg>
                </Col>
                <Col md={5} xs={11} className="icon-caption hidden-semimedium">
                  С террасой
                </Col>
              </Row>
              <Row className="table-row hidden-semimedium">
                <Col md={1} xs={1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px"
                    width="20px" height="20px" viewBox="0 0 20 20"
                    enableBackground="new 0 0 20 20"
                    xmlSpace="preserve">
                    <path fill="#2A761E" d="M18.373,1H1.627C1.281,1,1,1.281,1,1.627v16.746C1,18.719,1.281,19,1.627,19h10.214
                              c0.346,0,0.627-0.281,0.627-0.627c0-0.346-0.28-0.627-0.627-0.627H2.253v-6.685h4.338v3.084c0,0.346,0.28,0.627,0.627,0.627
                              c0.346,0,0.627-0.28,0.627-0.627v-7.34c0-0.346-0.28-0.627-0.627-0.627c-0.346,0-0.627,0.28-0.627,0.627v3.003H2.253V2.253h8.961
                              v4.113c0,0.346,0.28,0.627,0.627,0.627h3.708c0.346,0,0.627-0.281,0.627-0.627c0-0.346-0.28-0.627-0.627-0.627h-3.081V2.253h5.28
                              v10.332h-5.906c-0.346,0-0.627,0.28-0.627,0.627s0.28,0.627,0.627,0.627h5.906v3.908h-2.198c-0.346,0-0.627,0.28-0.627,0.627
                              c0,0.346,0.28,0.627,0.627,0.627h2.825C18.72,19,19,18.719,19,18.373V1.627C19,1.281,18.72,1,18.373,1z"/>
                  </svg>
                </Col>
                <Col md={5} xs={11} className="icon-caption">
                  Комнат: <b>3</b>
                </Col>
              </Row></div>
          </Panel>
        </div>
      </div>
    )
  }
}

export default ProjectDescription