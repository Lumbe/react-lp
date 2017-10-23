import React from 'react'
import './projectPage.css'
import {Grid, Row, Col} from 'react-bootstrap'
import DefaultFooter from "./defaultFooter"
import ImageGallery from 'react-image-gallery'
import "./imageGalleryTheme.css"

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
        imagesUrls.push({original: images[src], thumbnail: images[src]})
      }
    }
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
                    <ImageGallery
                      items={imagesUrls}
                      slideInterval={2000}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showNav={false}
                      onImageLoad={this.handleImageLoad}/>
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