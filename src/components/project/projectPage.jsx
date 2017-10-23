import React from 'react'
import './projectPage.css'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import DefaultFooter from "./defaultFooter"
import projectImage from './images/3d_gnap_new.jpg'
import Slider from 'react-slick'

class ProjectPage extends React.Component {
  importImages(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    const images = this.importImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    let imagesUrls = [];
    for (let src in images) {
      if (images.hasOwnProperty(src)) {
        imagesUrls.push(images[src])
      }
    }
    let one_settings = {
      className: 'slick-one-img',
      asNavFor: '.slick-theme-project',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
    };
    let multiple_settings = {
      className: "slick-theme-project",
      slidesToShow: 4,
      arrows: true,
      draggable: false,
      asNavFor: '.slick-one-img',
      swipe: true,
      responsive: [
        { breakpoint: 992,
          settings: { slidesToShow: 1 } },
        { breakpoint: 5000, settings: { slidesToShow: 4 } }
      ],
      // speed: 500,
      // slidesToScroll: 1
    };
    return (
      <div className="project-page">
        <Grid>
          <Row>
            <div>
              <div className="menu-divider"/>
            </div>
          </Row>
          <Row>
            <Col md={3} mdPush={9}>
              CTA form
            </Col>
            <Col md={9} mdPull={3}>
              <Row>
                <Col md={12}>
                  <div className="card">
                    <Slider {...one_settings}>
                      <Image src={projectImage} responsive/>
                    </Slider>
                    <Slider {...multiple_settings}>
                      {imagesUrls.map((src, index) => {
                        return (
                          <div key={index} className="img-container">
                            <Image src={src} responsive/>
                          </div>
                        )
                      })}
                    </Slider>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  project description
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  project plans
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  project changes
                </Col>
              </Row>

            </Col>
            <Col md={12}>
              similar projects similar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projectssimilar projects
            </Col>
          </Row>
        </Grid>
        <DefaultFooter/>
      </div>
    )
  }
}

export default ProjectPage