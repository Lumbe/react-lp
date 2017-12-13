import React from 'react'
import './filter.css'
import {Row, Col, FormGroup, FormControl, InputGroup, ControlLabel, Checkbox, Radio, Button} from 'react-bootstrap'
import {Range} from './areaRangeSlider'
// import 'rc-slider/assets/index.css';
import './slider.css'
import FontAwesome from 'react-fontawesome'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minArea: 15,
      maxArea: 370,
      areaRange: [15, 370],
      filter: {}
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.updateFilterState(event)
    }
  }

  updateFilterState(event, isSlider=false) {
    const filter = this.state.filter;
    if (isSlider) {
      const {minArea, maxArea} = this.state;
      filter["minArea"] = minArea;
      filter["maxArea"] = maxArea;
    } else {
      const field = event.target.name;
      filter[field] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }
    // remove falsy keys from filter
    for (let key in filter) {
      if (filter.hasOwnProperty(key)) {
        if (!filter[key]) {
          delete filter[key]
        }
      }
    }
    this.setState({filter: filter}, () => {console.log('to do: get filtered collection from api')});
  }

  onMinAreaChange(e) {
    this.setState({ minArea: +e.target.value }, () => {this.setAreaRangeValues()});
  };

  onMaxAreaChange(e) {
    this.setState({ maxArea: +e.target.value }, () => {this.setAreaRangeValues()});
  }

  setAreaRangeValues() {
    const { minArea, maxArea } = this.state;
    this.setState({ areaRange: [minArea, maxArea] });
  }

  onSliderChange(value) {
    this.setState({
      minArea: value[0],
      maxArea: value[1],
      areaRange: value
    });
  }

  resetFilter() {
    //reset uncontrolled inputs
    document.getElementById('filter-projects').reset();
    // reset controlled inputs
    this.setState({filter: {}, minArea: 18, maxArea: 370, areaRange: [18, 370]});
    console.log('to do: get unfiltered collection from api')
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <form className="form-light" id="filter-projects"><h3><span className="text-highlight">Расширенный поиск</span></h3>
            <hr className="green"/>
            <FormGroup controlId="search">
              <ControlLabel>Поиск по названию</ControlLabel>
              <FormControl
                name="search"
                type="text"
                placeholder="Название проекта"
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </FormGroup>
            <hr/>
            <FormGroup className="category-select" controlId="categorySelect">
              <FormControl
                name="category"
                componentClass="select"
                placeholder="Выбор категории"
                onChange={this.updateFilterState.bind(this)}
              >
                <option hidden>Выбор категории</option>
                <option value="Дома">Дома</option>
                <option value="Дачи">Дачи</option>
              </FormControl>
              <div className="dropdown-icon">
                <FontAwesome name="angle-down" size="lg"/>
              </div>
            </FormGroup>
            <hr/>
            <FormGroup controlId="areaInput">
              <ControlLabel>Общая площадь</ControlLabel>
              <Row>
                <Col md={6}>
                  <FormControl
                    name="minArea"
                    type="number"
                    value={this.state.minArea}
                    onChange={this.onMinAreaChange.bind(this)}
                    onBlur={this.updateFilterState.bind(this)}
                  />
                </Col>
                <Col md={6}>
                  <FormControl
                    name="maxArea"
                    type="number"
                    value={this.state.maxArea}
                    onChange={this.onMaxAreaChange.bind(this)}
                    onBlur={this.updateFilterState.bind(this)}
                  />
                </Col>
              </Row>
              <div className="range-slider">
                <Range
                  min={0}
                  max={400}
                  step={5}
                  marks={{20: "|", 100: "|", 200: "|", 300: "|", 377: "|"}}
                  allowCross={false}
                  value={this.state.areaRange}
                  onChange={this.onSliderChange.bind(this)}
                  onAfterChange={this.updateFilterState.bind(this, true)}
                />
              </div>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Этажность</ControlLabel>
              <br/>
              <Checkbox
                name="1floor"
                inline
                onClick={this.updateFilterState.bind(this)}
              >
                1 этаж
              </Checkbox>
              {' '}
              <Checkbox
                name="2floor"
                inline
                onChange={this.updateFilterState.bind(this)}
              >
                2 этажа
              </Checkbox>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Количество комнат</ControlLabel>
              <br/>
              <Radio
                name="rooms"
                inline
                value="1"
                onChange={this.updateFilterState.bind(this)}
              >
                1
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="2"
                onChange={this.updateFilterState.bind(this)}
              >
                2
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="3"
                onChange={this.updateFilterState.bind(this)}
              >
                3
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="4"
                onChange={this.updateFilterState.bind(this)}
              >
                4
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="5"
                onChange={this.updateFilterState.bind(this)}
              >
                5
              </Radio>
            </FormGroup>
            <hr/>
            <FormGroup>
              <ControlLabel>Дополнительно</ControlLabel>
              <Checkbox
                name="mansard"
                onChange={this.updateFilterState.bind(this)}
              >
                с мансардой
              </Checkbox>
              <Checkbox
                name="terrace"
                onChange={this.updateFilterState.bind(this)}
              >
                с террасой
              </Checkbox>
              <Checkbox
                name="garage"
                onChange={this.updateFilterState.bind(this)}
              >
                с гаражом
              </Checkbox>
            </FormGroup>
            <Button bsStyle="green" onClick={this.resetFilter.bind(this)}>Сбросить все фильтры</Button></form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Filter