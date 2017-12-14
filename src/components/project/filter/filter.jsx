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
                className="checkbox-green"
                onClick={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
                1 этаж
              </Checkbox>
              {' '}
              <Checkbox
                name="2floor"
                inline
                className="checkbox-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <span className="cr">
                  <FontAwesome name="check"/>
                </span>
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
                className="radio-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <div className="number">1</div>
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="2"
                className="radio-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <div className="number">2</div>
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="3"
                className="radio-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <div className="number">3</div>
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="4"
                className="radio-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <div className="number">4</div>
              </Radio>
              {' '}
              <Radio
                name="rooms"
                inline
                value="5"
                className="radio-green"
                onChange={this.updateFilterState.bind(this)}
              >
                <div className="number">5</div>
              </Radio>
            </FormGroup>
            <hr/>
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
            </FormGroup>
            <Button bsStyle="green" onClick={this.resetFilter.bind(this)}>Сбросить все фильтры</Button></form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Filter