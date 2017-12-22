import React from 'react'
import './filter.css'
import {Row, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button} from 'react-bootstrap'
import {Range} from './areaRangeSlider'
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
    this.setState({filter: filter}, () => {
      this.props.loadProjects(this.state.filter)
    });
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

  handleFocus(e) {
    let elem = e.target;
    let value = elem.value;
    elem.onblur = (e) => {
      if (e.target.value === value) {
        elem.onkeypress = null;
        return
      }
      this.updateFilterState(e);
    };
    elem.onkeypress = (e) => {
      if(e.key === 'Enter'){
        this.updateFilterState(e);
        elem.onblur = null;
      }
    }
  }

  resetFilter() {
    //reset uncontrolled inputs
    document.getElementById('filter-projects').reset();
    // reset controlled inputs
    this.setState({filter: {}, minArea: 18, maxArea: 370, areaRange: [18, 370]}, () => {
      this.props.loadProjects({});
    });
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
                onFocus={this.handleFocus.bind(this)}
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
                <option value="Жилые дома">Жилые дома</option>
                <option value="Дачные дома">Дачные дома</option>
                <option value="Бани и сауны">Бани и сауны</option>
                <option value="Дома на две семьи">Дома на две семьи</option>
                <option value="Отели и гостиницы">Отели и гостиницы</option>
                <option value="Офис-центры">Офис-центры</option>
                <option value="Рестораны">Рестораны</option>
                <option value="Таунхаусы">Таунхаусы</option>
              </FormControl>
              <div className="dropdown-icon">
                <FontAwesome name="angle-down" size="lg"/>
              </div>
            </FormGroup>
            <hr/>
            <FormGroup controlId="areaInput">
              <ControlLabel>Общая площадь</ControlLabel>
              <Row>
                <Col md={6} sm={6} xs={6}>
                  <FormControl
                    name="minArea"
                    type="number"
                    value={this.state.minArea}
                    onChange={this.onMinAreaChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                  />
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <FormControl
                    name="maxArea"
                    type="number"
                    value={this.state.maxArea}
                    onChange={this.onMaxAreaChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
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
              <Row className="floors-radios">
                <Col md={6} sm={6} xs={6}>
                  <Radio
                    name="floors"
                    value={1}
                    className="floor-radio-btn"
                    onClick={this.updateFilterState.bind(this)}
                  >
                    <div className="floor-text">1 этаж</div>
                  </Radio>
                </Col>
              {' '}
                <Col md={6} sm={6} xs={6}>
                  <Radio
                    name="floors"
                    value={2}
                    className="floor-radio-btn"
                    onChange={this.updateFilterState.bind(this)}
                  >
                    <div className="floor-text">2 этажа</div>
                  </Radio>
                </Col>
              </Row>
            </FormGroup>
            <hr/>
            {/*<FormGroup>*/}
              {/*<ControlLabel>Количество комнат</ControlLabel>*/}
              {/*<br/>*/}
              {/*<Radio*/}
                {/*name="rooms"*/}
                {/*inline*/}
                {/*value="1"*/}
                {/*className="radio-green"*/}
                {/*onChange={this.updateFilterState.bind(this)}*/}
              {/*>*/}
                {/*<div className="number">1</div>*/}
              {/*</Radio>*/}
              {/*{' '}*/}
              {/*<Radio*/}
                {/*name="rooms"*/}
                {/*inline*/}
                {/*value="2"*/}
                {/*className="radio-green"*/}
                {/*onChange={this.updateFilterState.bind(this)}*/}
              {/*>*/}
                {/*<div className="number">2</div>*/}
              {/*</Radio>*/}
              {/*{' '}*/}
              {/*<Radio*/}
                {/*name="rooms"*/}
                {/*inline*/}
                {/*value="3"*/}
                {/*className="radio-green"*/}
                {/*onChange={this.updateFilterState.bind(this)}*/}
              {/*>*/}
                {/*<div className="number">3</div>*/}
              {/*</Radio>*/}
              {/*{' '}*/}
              {/*<Radio*/}
                {/*name="rooms"*/}
                {/*inline*/}
                {/*value="4"*/}
                {/*className="radio-green"*/}
                {/*onChange={this.updateFilterState.bind(this)}*/}
              {/*>*/}
                {/*<div className="number">4</div>*/}
              {/*</Radio>*/}
              {/*{' '}*/}
              {/*<Radio*/}
                {/*name="rooms"*/}
                {/*inline*/}
                {/*value="5"*/}
                {/*className="radio-green"*/}
                {/*onChange={this.updateFilterState.bind(this)}*/}
              {/*>*/}
                {/*<div className="number">5</div>*/}
              {/*</Radio>*/}
            {/*</FormGroup>*/}
            {/*<hr/>*/}
            <FormGroup>
              <ControlLabel>Дополнительно</ControlLabel>
              <Checkbox
                name="mansard"
                className="checkbox-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
                <span className="svg-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="13" viewBox="0 0 27 13">
                    <image id="Vector_Smart_Object1112_copy_7" width="27" height="13" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAQAAADyUt1YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMNHjDjkB53AAABiklEQVQoz5XSMUiVcRQF8N9nL4oaHkUSRGAOUlRQlAk2iElqGC6Plj8NEeRg8JJaojBcVMhIgjJaohzqTzhGgziEhBgPIt7Q4IvACgcbwowoil5NfX2JS+dO95wL53LuTWQQ67yy0Wr4Yk94+7et+UccNaNeg3duqk+rwbzEaHYwl/Fq121vmI/nrNMfllO+aINWM7E9TP3hklRcq+xxuBhrVZwP91O+VsUFT/Xqti/8WLlkUd4ghswZJ7bFOjBszndvPJFXXOEWt3qtNzyIB5QcDqW43ZxCmIyNnmsT/bRgzG0NYTHrNqLsIa4bDyVcMxsmY+KWe7osa7ZLTtlIJpLY7KSD4RcmPCK2OGE/TtmpzzPHw0IccFXBdLwTZkmINUpK4WwawhovTIe+mFcxqMvXUCDmvDRlvSZNoZrDGTt0ZI7SY5sBDFj03jGnYyuYcEWLRlt8yMVNhvWHj6nXZkMuhaW4W9FRBZ/cyPzKodAESRzTqUM1lS47olPVXVU9Vse3JC7J+198/g08lXwx7QsD7QAAAABJRU5ErkJggg=="/>
                  </svg>
                </span>
                {' '}
                с мансардой
              </Checkbox>
              <Checkbox
                name="terrace"
                className="checkbox-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
                <span className="svg-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 18 20">
                    <image id="Vector_Smart_Object113_copy_6" width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAQAAAAqnqXBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMNHzoaXsYoAAABPklEQVQoz42QMUjDYBCFv79WRIfiYIduIk52FQcR0VHoEBQrPy4KKgV1C4JId3FwKAUVB+t04CS42E1HcasgShfFyRohBIII0TokSpMG6S3/z7v37t49RahklEP6WdfVVjTRQkhJiRs+qHEpZ5KJIck8DyyyyqSeJccYj7IpXX5PAcgQZWY4xdRWIOmjiEmNgr4FJd2YFHmmoK8j/kY4YpwDdpRckANcPNpLkQJelEwwHGqsMMBuCHlvE0tFrqJYgg6qnfTFdxRKyhYn+q0F2ScVWp9mGWmK8d8qMaSZDL57rMUwqnoBICBxzH1MBHeBJ//RderBzCk8XYkYB7ZlCYBPNn5PkDRlegDI+BG42Nh45Mn+ibPk8bCxcf1JJX0OMshcxLapn0AMpjtKPIlDAwAHFwt4pRewcHEAaOD8ADrQXzJPx6rSAAAAAElFTkSuQmCC"/>
                  </svg>
                </span>
                {' '}
                с террасой
              </Checkbox>
              <Checkbox
                name="garage"
                className="checkbox-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
                <span className="svg-icon double">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="17" viewBox="0 0 19 17">
                    <image id="Vector_Smart_Object12_copy_5" width="19" height="17" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAQAAACVkV9MAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMNIDisjo04AAABI0lEQVQoz4WRv0vDUBSFv0iGQgddRHQoweDkIroodNBBEMRBnB6dBC0FV0dx8McmtFBHEUHlLA6CFMTNajcdOmtQ+gdYO4SiSxyatDZCPNN9934c7rnPAgA5HLFEmt/yuWXbvAPYYeuKGR7x+jCXNcaZ7r41qkCX/JHOFWgMYACAOeC+O1xXQ74uNEgVyPawWaAWQllOSVEnR5laaIENyrDANyMaBmATOKROmVXO+GJeGdOwtM8O/+nAUhuPk0RoA9cmxZMpJVGaYjK8m1xWqJiXvvEEy9wYr5cU8hQpxGwKFMl3yugX9qjwHMN2uY56IWZ8qvGdjM9DVFtq0uYuMekiaUs5jhlKxFpsRalKCuTEDuEoUHiqKOkrLZoxlw8+eeuUPzLmU0L7e36yAAAAAElFTkSuQmCC"/>
                  </svg>
                </span>
                {' '}
                с гаражом
              </Checkbox>
              <Checkbox
                name="hitech"
                className="checkbox-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
                <span className="svg-icon double">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="xMinYMin" viewBox="0 0 512 512" enableBackground="new 0 0 512 512;" xmlSpace="preserve" width="20px" height="20px">
                  <path fill="#B0B0B0" d="M351.749,104.869H69.133c-4.142,0-7.5,3.357-7.5,7.5v89.447c0,4.142,3.358,7.5,7.5,7.5h282.616c4.142,0,7.5-3.358,7.5-7.5    v-89.447C359.249,108.226,355.891,104.869,351.749,104.869z M132.287,194.316H76.633v-74.447h55.654V194.316z M202.941,194.316    h-55.654v-74.447h55.654V194.316z M273.595,194.316h-55.654v-74.447h55.654V194.316z M344.249,194.316h-55.654v-74.447h55.654    V194.316z"/>
                  <path fill="#B0B0B0" d="M504.5,235.67H403.398V92.827h9.984c4.142,0,7.5-3.358,7.5-7.5V47.116c0-4.142-3.358-7.5-7.5-7.5c0,0-316.337,0-317.575,0    c-9.598,0-9.758,15-0.004,15h310.079v23.211H15V54.616c0,0,50.463,0,50.802,0c9.551,0,9.771-15,0.002-15H7.5    c-4.142,0-7.5,3.358-7.5,7.5v38.211c0,4.142,3.358,7.5,7.5,7.5h9.984v372.057c0,4.142,3.358,7.5,7.5,7.5H504.5    c4.142,0,7.5-3.358,7.5-7.5V243.17C512,239.028,508.642,235.67,504.5,235.67z M169.771,457.384h-45.87V282.606h45.87V457.384z     M199.335,457.383h-14.564V275.106c0-4.143-3.358-7.5-7.5-7.5h-60.87c-4.142,0-7.5,3.357-7.5,7.5v182.278H94.338V250.67h104.997    V457.383z M263.238,243.17v214.213h-48.904V243.17c0-4.142-3.358-7.5-7.5-7.5H86.838c-4.142,0-7.5,3.358-7.5,7.5v214.213H32.484    V92.827h355.914V235.67h-117.66C266.596,235.67,263.238,239.028,263.238,243.17z M458.984,457.384H316.255v-30.031h142.729    V457.384z M458.984,412.353H316.255v-30.031h142.729V412.353z M458.984,367.322H316.255V337.29h142.729V367.322z M458.984,322.29    H316.255v-30.031h142.729V322.29z M497,457.384h-23.016V284.759c0-0.259-0.013-0.515-0.039-0.766    c-0.354-3.486-3.214-6.341-6.694-6.695c-0.252-0.025-0.508-0.039-0.767-0.039H308.755c-0.259,0-0.515,0.013-0.767,0.039    c-3.419,0.344-6.337,3.174-6.695,6.695c-0.026,0.252-0.039,0.508-0.039,0.767v172.625h-23.016V250.67H497V457.384z"/>
                </svg>
                </span>
                {' '}
                хай-тек
              </Checkbox>
            </FormGroup>
            <br/>
            <Button bsStyle="green" block onClick={this.resetFilter.bind(this)}>Сбросить все фильтры</Button></form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Filter