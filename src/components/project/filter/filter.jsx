import React from 'react'
import './filter.css'
import {Row, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio} from 'react-bootstrap'

class Filter extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h4>Расширенный поиск</h4>
            <FormGroup controlId="search">
              <ControlLabel>Поиск по названию</ControlLabel>
              <FormControl
                name="search"
                type="text"
                placeholder="Название проекта"
              />
            </FormGroup>
            <hr/>
            <FormGroup controlId="categorySelect">
              <FormControl
                name="category"
                componentClass="select"
                placeholder="Выбор категории"
              >
                <option value="Дома">Дома</option>
                <option value="Дачи">Дачи</option>
              </FormControl>
            </FormGroup>
            <hr/>
            <FormGroup controlId="areaInput">
              <ControlLabel>Общая площадь</ControlLabel>
              <Row>
                <Col md={6}>
                  <FormControl
                    name="minArea"
                    type="text"
                    placeholder="0"
                  />
                </Col>
                <Col md={6}>
                  <FormControl
                    name="maxArea"
                    type="text"
                    placeholder="1600"
                  />
                </Col>
              </Row>
              <div>слайдер</div>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Этажность</ControlLabel>
              <br/>
              <Checkbox inline>
                1 этаж
              </Checkbox>
              {' '}
              <Checkbox inline>
                2 этажа
              </Checkbox>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Количество комнат</ControlLabel>
              <br/>
              <Radio name="rooms" inline>
                1
              </Radio>
              {' '}
              <Radio name="rooms" inline>
                2
              </Radio>
              {' '}
              <Radio name="rooms" inline>
                3
              </Radio>
              {' '}
              <Radio name="rooms" inline>
                4
              </Radio>
              {' '}
              <Radio name="rooms" inline>
                5
              </Radio>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Дополнительно</ControlLabel>
              <Checkbox>
                с мансардой
              </Checkbox>
              <Checkbox>
                с террасой
              </Checkbox>
              <Checkbox>
                с гаражом
              </Checkbox>
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Filter