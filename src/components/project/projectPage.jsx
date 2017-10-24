import React from 'react'
import './projectPage.css'
import {Grid, Row, Col, Image, Clearfix, Tabs, Tab, Media} from 'react-bootstrap'
import DefaultFooter from "./defaultFooter"
import ImageGallery from 'react-image-gallery'
import "./imageGalleryTheme.css"
import mansardIcon from './images/mansard-icon.png'
import terraceIcon from './images/terrace-icon.png'
import garageIcon from './images/garage-icon.png'
import planIcon from './images/plan-icon.png'
import store1 from './images/1store.jpg'
import store2 from './images/2store.jpg'
import LightForm from './lightForm'
import './lightForm.css'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      title: 'Гнап',
      area: '125.47'
    }
  }
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
    const formTitle = <span><span className="text-highlight">Рассчитать стоимость</span> строительства
      дома по проекту "{this.state.title}" {this.state.area}кв.м.</span>;
    return (
      <div className="project-page">
        <Grid>
          <div className="menu-divider"/>
          <h1>Проект "{this.state.title}"</h1>
          <Row>
            <Col md={3} mdPush={9}>
              <LightForm
                title={formTitle}
              />
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
                      <div className="plans-divider"/>
                      <ol className="plans-list">
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                        <li>Спальня 12,17м2</li>
                      </ol>
                    </Tab>
                    <Tab eventKey={1} title="1-й этаж">
                      <Image className="img-plan" src={store1} responsive />
                      <div className="plans-divider"/>
                      <ol className="plans-list">
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                        <li>Крыльцо 4,47м2</li>
                      </ol>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
              <div className="plans-info">
                <Media>
                  <Col md={2} sm={2} xs={12}><Media.Left align="middle">
                    <Image src={planIcon}/>
                  </Media.Left></Col>
                  <Col md={10} sm={10} xs={12}><Media.Body>
                    <p>
                      Этот проект можно изменить по вашему желанию. Например, поменять планировку,
                      добавить или убрать террасу, гараж. Дизайн фасада так же может быть выполнен
                      в другом стиле, например с использованием таких декоративных материалов как декор.штукатурка
                      "короед", фасадная плитка или кирпич
                    </p>
                  </Media.Body></Col>
                </Media>
              </div>
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