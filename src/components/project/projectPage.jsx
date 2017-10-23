import React from 'react'
import './projectPage.css'
import {Grid, Row, Col, Image, Clearfix, Tabs, Tab} from 'react-bootstrap'
import DefaultFooter from "./defaultFooter"
import ImageGallery from 'react-image-gallery'
import "./imageGalleryTheme.css"
import mansardIcon from './images/mansard-icon.png'
import terraceIcon from './images/terrace-icon.png'
import garageIcon from './images/garage-icon.png'
import store1 from './images/1store.jpg'
import store2 from './images/2store.jpg'

class ProjectPage extends React.Component {
  importImages(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    const images = this.importImages(require.context('./testImages', false, /\.(png|jpe?g|svg)$/));
    let imagesUrls = [];
    for (let src in images) {
      if (images.hasOwnProperty(src)) {
        imagesUrls.push({original: images[src], thumbnail: images[src]})
      }
    }
    return (
      <div className="project-page">
        <Grid>
          <div className="menu-divider"/>
          <h1>Проект "Гелиос"</h1>
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
                    />
                    <div className="project-options">
                      <Col md={3} sm={3} xs={4}>
                        <div className="option-item">
                          <div className="img-wrap"><Image src={mansardIcon}/></div>
                          с мансардой</div>
                      </Col>
                      <Col md={3} sm={3} xs={4}>
                        <div className="option-item">
                          <div className="img-wrap"><Image src={terraceIcon}/></div>
                          с террасой
                        </div>
                      </Col>
                      <Col md={3} sm={3} xs={4}>
                        <div className="option-item">
                          <div className="img-wrap"><Image src={garageIcon}/></div>
                          с гаражом
                        </div>
                      </Col>
                      <Col md={4} sm={4} xs={12}>
                        <div className="option-item">
                          <div className="area">125,42 <span className="units">кв.м.</span></div>
                          <span className="area-description">площадь объекта</span>
                        </div>
                      </Col>
                      <Clearfix/>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h3>Описание</h3>
                  <p>
                    Уютный двухэтажный дом с балконом и крыльцом. Просторные комнаты, много света
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Tabs className="house-plans" defaultActiveKey={1}>
                    <h3>Планировка</h3>
                    <Tab eventKey={2} title="2-й этаж">
                      <Image className="img-plan" src={store2} responsive />
                    </Tab>
                    <Tab eventKey={1} title="1-й этаж">
                      <Image className="img-plan" src={store1} responsive />
                    </Tab>
                  </Tabs>
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