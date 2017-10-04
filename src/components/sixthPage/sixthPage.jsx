import React from 'react'
import {setWindowHeight,resetWindowHeight, setBackgroundImage, removeBackgroundImage, setDarkColorScheme, removeDarkColorScheme} from "../common/main";
import backgroundImage from './bg-screen6.jpg'
import './sixthPage.css'
import {Row, Col, Image} from 'react-bootstrap'

class SixthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      colorScheme: "dark"
    }
  }

  componentDidMount() {
    setWindowHeight();
    window.onresize = setWindowHeight;
    setBackgroundImage(backgroundImage);
    setDarkColorScheme();
  }

  componentWillUnmount() {
    resetWindowHeight();
    window.onresize = null;
    removeBackgroundImage();
    removeDarkColorScheme();
  }
  render() {
    return (
      <div className="sixth-section">
        <Row>
          <Col md={12} className="text-center">
            <h1>Этапы <span className="text-highlight">выполняемых работ</span></h1>
            <p className="section-description">От заключения договора до заселения в дом</p>
          </Col>
        </Row>
        <Row className="steps">
          <Col md={2}>
            <div className="icon-wrapper">
              <div className="icon-block text-center">
                <div className="outer-border">
                  <div className="inner-border">
                    <div className="icon-bg">
                      {/*<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">*/}
                        {/*<image id="Vector_Smart_Object" y="0.5" width="46" height="45" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QkcADUApCIqZwAAB+VJREFUaN7NmX+QVVUdwD/7WGiK8UJ2b/xoUnTUkJRkJpfqqcCOkx4n+6Et3hZ7NEPIak9zWAtWqQEaaptRrHguQ86ovBQuSrtZmwcwdwV5OWBNGkEONSTImuO5pHtTzGChP77ntXff3H373i4U35md9/a+7z3n8879/n41VClhZCYACrgKuBQ4DzgbqAGOAyHwF+CPQBewzXW8t6vdZyipqQL4WuAO4BogBbwH7AX2W9g+YAwwEbgIuNjqHQXagftcx3vxfwYeRuaTQA6YCUTAJvtXcB3vX2XuGwdcDTQCnwdqgc3AXa7jHTxt4GFkaoGVwFJ7aj8E1mQLmV7gSuA64DPAhcAE+k3lNeDPwE6gI1B6bxiZc4B7gK8D7wJZ1/EeOeXg9rTagXpgK7AgW8iEwEKgGZhiVfcj5tJDv6mcC1wGTLY6vwe+D3Tk0vkZwM+AaUAbcIfreH2nBNxCdwMzgBXAimwhMwt4ELgAcbw24IlA6Z7BFva1uhgxk1uBDwHPAQty6XwP8AjQAGwAMsOBHwAeRmYM8AxwBXCb63hrfa2W2S9wBFgCrA+UPlHpBr5W7we+BdyNmFIml8532C/fBDzgOl52pOA/RiLHMtfxVvlatdkT6wYaA6Vfr3aD2BeYjpjfecCiXDr/MOLkNwJfcx1v/bDAw8jMQeLuk8CXsoXMd+xJbwbmBUr/e7jQMXgP+A1wCXBDLp1/Bvgd4g9TXcd7rSrwMDIpYE9xgWwhMx1xymeBa4eC9rVqAb4L3BQo/csK4F8AxgOX5dL5yUAB2Og6XmMYmUPAbqDRdbxB903Z17mIp6/IFjIR8FMkqfgVQLciUWM0sNnXam45/UBpA9wEnAW0uY73WyAA/DAy05AnfiOw2fpcWfA7Leg6YBES7u4KlH6jAugliENPAw4BG32t5g0BvwtYCyhfq9nA95CnfxviY6uB68vBp8LIXIRkxceyhcx7wGLgZeDRMsA1vlb3WuhfAdcFSu8HZiPJJz8UPLAKKRsWu463DwmXXwFGuY7XjCS864Ffh5H5QNKJK/v+cWAW8FHgwcFCnq9VDRLKmi30l4vmFCh9GJgD7LPwt5Q59b8jUUb5WrnAE0ix9ikA1/GWWvirgc5S+BSSvt9BHOIae719COgmoCMOHQMySMbdB6zztbq1zKm3IzVMMaKBVJ3E4JfZzwfApxDb3Os63nGgDugJlH4lAXoUkj2bkIzXMJjjWvg59jDaysDvsK+XI+Z5DJgaV3AdbxXQYtfrtpmdFHAO8Ferdz5io0nQeWABkjQygdJl03SgdAh8FqlV2nytliTovAG8CZxv0/4ByzNAXMdrtSdfB2wLIzMuBYwF/ml1xgP/SODIIXUHQDAUdAysF+i0/7b6Wi1MUHsTqWWwHOMHWe4x+1oHbC2Gw5NDMBxBytSRyDYkioxUXgQO1SKO6diLbyGeXXpyy3ytvogUXwPE1+pmpGosyvZA6e6EDRcl+Q7wQeAP9v1ZwOsAYWSuAia5jrepRP9J1/GW1yJJo7jxAaTlqkZ+YjcvShdSlA0pvlYftvceCCMzCvGx3fbjxUhdvynp3hTijB+3Hc9u4CO+VlOqAE8BT1mAV4FRVdxbDH0vINFkNBJdKtp0B+KgdYgdAtxQxeYAxwKl3wIqrtNj+xxHnlC9vbajkhtTgLbv5yLV4GFgoa9VqpIFhiu+VpMsuLahswHxsV2V3F/rOt7+MDK7gHm5dL4lW8jcB9wP3IzE7qIUT7PD16p0nb6Yzixfq6QoVRpC7wHeB6y2VeGVwFrX8Y7FdM4NI1O61kmQdAvwI2AjUhmuA74J3OtrtSVWIW5HytexJQudQOoMkKIrnQDdgzzJ4mnPRDorHSj9bC5igwXKxe5ZDfyNgV3acSRrD9pIfALYQoWNRDUySCOxEwhcx2usdJ0UgOt4J4CsXWxdLp1/GliO1AeP+lqNqXTBCqCfRirQ+bl0PgQeAt5GGuqK5b8O6DpeN7AG+ALQEii9Ein2G4AtvlYTRgg9HXgemTc25dL5TmRM8THgdtfxeqpZL2k80YXYadJ44ttAfoTjifm5dL6d/vK4zXW8b4SRuQSpvddUMmcZaiC0HFiZLWRmI31ofCD0eKD0oF15bCDUBLiIHS/IpfOvAuvtk9wIfNV1vL4wMnci0ayiIVG1I7hbkFQ8xaoWR3CHkegyGhnBzWDgCO4HQHu5EVwYmXiT0uo6XkvV4Hah+NDzHaAVeMBOAa5g4NBzor2tDwl9LyM95C8Cpf9kh553I7PHdxGbfjhhzxrErF5yHW/rsMBji12OxNc6yoyZfa1ScdsfZMz8c6DZdbyDYWSmAlHSEMi2aIE9sPlJ85VTNdg39JvKRCRSlB3sh5HZY3XrXcfbU/KFNfBpe+kpoMF1vKPDAo8tnPRTSrGD6aP/p5SXkAS2JemnlDAy9ciU4GgcPozMTiSqtSB5ZQkSLD5XCn9KxNbT1d4zM4xMbxgZE0Zmhr22IYzM7TGdlWFkToaR6Uqar/zfJAbfG0Zm5iA6Sy38c8Uu/4wQC3+kQvhdYWTGVrvH6YS/1JpMr+03k3SaLXyuauc83fBIyTEWccauBJ3twPTT2uVUKzay1COznU4beUrlFWDcGXXiRQkjcwESSs8G5rqO12mvT0bC7MEzErwEfhIS7w0ydvboH86emRJGZpKN60fDyJwII/N80Xz+A4GPdyJx9tQQAAAAAElFTkSuQmCC"/>*/}
                      {/*</svg>*/}
                      <Image className="img-icon"/>
                    </div>
                  </div>
                </div>
                <h4>Выбор проекта дома</h4>
              </div>
              <div className="description-wrapper">
                <div className="description-block">
                  Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="icon-wrapper">
              <div className="icon-block text-center">
                <div className="outer-border">
                  <div className="inner-border">
                    <div className="icon-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">
                        <image id="Vector_Smart_Object" y="0.5" width="46" height="45" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QkcADUApCIqZwAAB+VJREFUaN7NmX+QVVUdwD/7WGiK8UJ2b/xoUnTUkJRkJpfqqcCOkx4n+6Et3hZ7NEPIak9zWAtWqQEaaptRrHguQ86ovBQuSrtZmwcwdwV5OWBNGkEONSTImuO5pHtTzGChP77ntXff3H373i4U35md9/a+7z3n8879/n41VClhZCYACrgKuBQ4DzgbqAGOAyHwF+CPQBewzXW8t6vdZyipqQL4WuAO4BogBbwH7AX2W9g+YAwwEbgIuNjqHQXagftcx3vxfwYeRuaTQA6YCUTAJvtXcB3vX2XuGwdcDTQCnwdqgc3AXa7jHTxt4GFkaoGVwFJ7aj8E1mQLmV7gSuA64DPAhcAE+k3lNeDPwE6gI1B6bxiZc4B7gK8D7wJZ1/EeOeXg9rTagXpgK7AgW8iEwEKgGZhiVfcj5tJDv6mcC1wGTLY6vwe+D3Tk0vkZwM+AaUAbcIfreH2nBNxCdwMzgBXAimwhMwt4ELgAcbw24IlA6Z7BFva1uhgxk1uBDwHPAQty6XwP8AjQAGwAMsOBHwAeRmYM8AxwBXCb63hrfa2W2S9wBFgCrA+UPlHpBr5W7we+BdyNmFIml8532C/fBDzgOl52pOA/RiLHMtfxVvlatdkT6wYaA6Vfr3aD2BeYjpjfecCiXDr/MOLkNwJfcx1v/bDAw8jMQeLuk8CXsoXMd+xJbwbmBUr/e7jQMXgP+A1wCXBDLp1/Bvgd4g9TXcd7rSrwMDIpYE9xgWwhMx1xymeBa4eC9rVqAb4L3BQo/csK4F8AxgOX5dL5yUAB2Og6XmMYmUPAbqDRdbxB903Z17mIp6/IFjIR8FMkqfgVQLciUWM0sNnXam45/UBpA9wEnAW0uY73WyAA/DAy05AnfiOw2fpcWfA7Leg6YBES7u4KlH6jAugliENPAw4BG32t5g0BvwtYCyhfq9nA95CnfxviY6uB68vBp8LIXIRkxceyhcx7wGLgZeDRMsA1vlb3WuhfAdcFSu8HZiPJJz8UPLAKKRsWu463DwmXXwFGuY7XjCS864Ffh5H5QNKJK/v+cWAW8FHgwcFCnq9VDRLKmi30l4vmFCh9GJgD7LPwt5Q59b8jUUb5WrnAE0ix9ikA1/GWWvirgc5S+BSSvt9BHOIae719COgmoCMOHQMySMbdB6zztbq1zKm3IzVMMaKBVJ3E4JfZzwfApxDb3Os63nGgDugJlH4lAXoUkj2bkIzXMJjjWvg59jDaysDvsK+XI+Z5DJgaV3AdbxXQYtfrtpmdFHAO8Ferdz5io0nQeWABkjQygdJl03SgdAh8FqlV2nytliTovAG8CZxv0/4ByzNAXMdrtSdfB2wLIzMuBYwF/ml1xgP/SODIIXUHQDAUdAysF+i0/7b6Wi1MUHsTqWWwHOMHWe4x+1oHbC2Gw5NDMBxBytSRyDYkioxUXgQO1SKO6diLbyGeXXpyy3ytvogUXwPE1+pmpGosyvZA6e6EDRcl+Q7wQeAP9v1ZwOsAYWSuAia5jrepRP9J1/GW1yJJo7jxAaTlqkZ+YjcvShdSlA0pvlYftvceCCMzCvGx3fbjxUhdvynp3hTijB+3Hc9u4CO+VlOqAE8BT1mAV4FRVdxbDH0vINFkNBJdKtp0B+KgdYgdAtxQxeYAxwKl3wIqrtNj+xxHnlC9vbajkhtTgLbv5yLV4GFgoa9VqpIFhiu+VpMsuLahswHxsV2V3F/rOt7+MDK7gHm5dL4lW8jcB9wP3IzE7qIUT7PD16p0nb6Yzixfq6QoVRpC7wHeB6y2VeGVwFrX8Y7FdM4NI1O61kmQdAvwI2AjUhmuA74J3OtrtSVWIW5HytexJQudQOoMkKIrnQDdgzzJ4mnPRDorHSj9bC5igwXKxe5ZDfyNgV3acSRrD9pIfALYQoWNRDUySCOxEwhcx2usdJ0UgOt4J4CsXWxdLp1/GliO1AeP+lqNqXTBCqCfRirQ+bl0PgQeAt5GGuqK5b8O6DpeN7AG+ALQEii9Ein2G4AtvlYTRgg9HXgemTc25dL5TmRM8THgdtfxeqpZL2k80YXYadJ44ttAfoTjifm5dL6d/vK4zXW8b4SRuQSpvddUMmcZaiC0HFiZLWRmI31ofCD0eKD0oF15bCDUBLiIHS/IpfOvAuvtk9wIfNV1vL4wMnci0ayiIVG1I7hbkFQ8xaoWR3CHkegyGhnBzWDgCO4HQHu5EVwYmXiT0uo6XkvV4Hah+NDzHaAVeMBOAa5g4NBzor2tDwl9LyM95C8Cpf9kh553I7PHdxGbfjhhzxrErF5yHW/rsMBji12OxNc6yoyZfa1ScdsfZMz8c6DZdbyDYWSmAlHSEMi2aIE9sPlJ85VTNdg39JvKRCRSlB3sh5HZY3XrXcfbU/KFNfBpe+kpoMF1vKPDAo8tnPRTSrGD6aP/p5SXkAS2JemnlDAy9ciU4GgcPozMTiSqtSB5ZQkSLD5XCn9KxNbT1d4zM4xMbxgZE0Zmhr22IYzM7TGdlWFkToaR6Uqar/zfJAbfG0Zm5iA6Sy38c8Uu/4wQC3+kQvhdYWTGVrvH6YS/1JpMr+03k3SaLXyuauc83fBIyTEWccauBJ3twPTT2uVUKzay1COznU4beUrlFWDcGXXiRQkjcwESSs8G5rqO12mvT0bC7MEzErwEfhIS7w0ydvboH86emRJGZpKN60fDyJwII/N80Xz+A4GPdyJx9tQQAAAAAElFTkSuQmCC"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4>Выбор проекта дома</h4>
              </div>
              <div className="description-wrapper">
                <div className="description-block">
                  Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="icon-wrapper">
              <div className="icon-block text-center">
                <div className="outer-border">
                  <div className="inner-border">
                    <div className="icon-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">
                        <image id="Vector_Smart_Object" y="0.5" width="46" height="45" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QkcADUApCIqZwAAB+VJREFUaN7NmX+QVVUdwD/7WGiK8UJ2b/xoUnTUkJRkJpfqqcCOkx4n+6Et3hZ7NEPIak9zWAtWqQEaaptRrHguQ86ovBQuSrtZmwcwdwV5OWBNGkEONSTImuO5pHtTzGChP77ntXff3H373i4U35md9/a+7z3n8879/n41VClhZCYACrgKuBQ4DzgbqAGOAyHwF+CPQBewzXW8t6vdZyipqQL4WuAO4BogBbwH7AX2W9g+YAwwEbgIuNjqHQXagftcx3vxfwYeRuaTQA6YCUTAJvtXcB3vX2XuGwdcDTQCnwdqgc3AXa7jHTxt4GFkaoGVwFJ7aj8E1mQLmV7gSuA64DPAhcAE+k3lNeDPwE6gI1B6bxiZc4B7gK8D7wJZ1/EeOeXg9rTagXpgK7AgW8iEwEKgGZhiVfcj5tJDv6mcC1wGTLY6vwe+D3Tk0vkZwM+AaUAbcIfreH2nBNxCdwMzgBXAimwhMwt4ELgAcbw24IlA6Z7BFva1uhgxk1uBDwHPAQty6XwP8AjQAGwAMsOBHwAeRmYM8AxwBXCb63hrfa2W2S9wBFgCrA+UPlHpBr5W7we+BdyNmFIml8532C/fBDzgOl52pOA/RiLHMtfxVvlatdkT6wYaA6Vfr3aD2BeYjpjfecCiXDr/MOLkNwJfcx1v/bDAw8jMQeLuk8CXsoXMd+xJbwbmBUr/e7jQMXgP+A1wCXBDLp1/Bvgd4g9TXcd7rSrwMDIpYE9xgWwhMx1xymeBa4eC9rVqAb4L3BQo/csK4F8AxgOX5dL5yUAB2Og6XmMYmUPAbqDRdbxB903Z17mIp6/IFjIR8FMkqfgVQLciUWM0sNnXam45/UBpA9wEnAW0uY73WyAA/DAy05AnfiOw2fpcWfA7Leg6YBES7u4KlH6jAugliENPAw4BG32t5g0BvwtYCyhfq9nA95CnfxviY6uB68vBp8LIXIRkxceyhcx7wGLgZeDRMsA1vlb3WuhfAdcFSu8HZiPJJz8UPLAKKRsWu463DwmXXwFGuY7XjCS864Ffh5H5QNKJK/v+cWAW8FHgwcFCnq9VDRLKmi30l4vmFCh9GJgD7LPwt5Q59b8jUUb5WrnAE0ix9ikA1/GWWvirgc5S+BSSvt9BHOIae719COgmoCMOHQMySMbdB6zztbq1zKm3IzVMMaKBVJ3E4JfZzwfApxDb3Os63nGgDugJlH4lAXoUkj2bkIzXMJjjWvg59jDaysDvsK+XI+Z5DJgaV3AdbxXQYtfrtpmdFHAO8Ferdz5io0nQeWABkjQygdJl03SgdAh8FqlV2nytliTovAG8CZxv0/4ByzNAXMdrtSdfB2wLIzMuBYwF/ml1xgP/SODIIXUHQDAUdAysF+i0/7b6Wi1MUHsTqWWwHOMHWe4x+1oHbC2Gw5NDMBxBytSRyDYkioxUXgQO1SKO6diLbyGeXXpyy3ytvogUXwPE1+pmpGosyvZA6e6EDRcl+Q7wQeAP9v1ZwOsAYWSuAia5jrepRP9J1/GW1yJJo7jxAaTlqkZ+YjcvShdSlA0pvlYftvceCCMzCvGx3fbjxUhdvynp3hTijB+3Hc9u4CO+VlOqAE8BT1mAV4FRVdxbDH0vINFkNBJdKtp0B+KgdYgdAtxQxeYAxwKl3wIqrtNj+xxHnlC9vbajkhtTgLbv5yLV4GFgoa9VqpIFhiu+VpMsuLahswHxsV2V3F/rOt7+MDK7gHm5dL4lW8jcB9wP3IzE7qIUT7PD16p0nb6Yzixfq6QoVRpC7wHeB6y2VeGVwFrX8Y7FdM4NI1O61kmQdAvwI2AjUhmuA74J3OtrtSVWIW5HytexJQudQOoMkKIrnQDdgzzJ4mnPRDorHSj9bC5igwXKxe5ZDfyNgV3acSRrD9pIfALYQoWNRDUySCOxEwhcx2usdJ0UgOt4J4CsXWxdLp1/GliO1AeP+lqNqXTBCqCfRirQ+bl0PgQeAt5GGuqK5b8O6DpeN7AG+ALQEii9Ein2G4AtvlYTRgg9HXgemTc25dL5TmRM8THgdtfxeqpZL2k80YXYadJ44ttAfoTjifm5dL6d/vK4zXW8b4SRuQSpvddUMmcZaiC0HFiZLWRmI31ofCD0eKD0oF15bCDUBLiIHS/IpfOvAuvtk9wIfNV1vL4wMnci0ayiIVG1I7hbkFQ8xaoWR3CHkegyGhnBzWDgCO4HQHu5EVwYmXiT0uo6XkvV4Hah+NDzHaAVeMBOAa5g4NBzor2tDwl9LyM95C8Cpf9kh553I7PHdxGbfjhhzxrErF5yHW/rsMBji12OxNc6yoyZfa1ScdsfZMz8c6DZdbyDYWSmAlHSEMi2aIE9sPlJ85VTNdg39JvKRCRSlB3sh5HZY3XrXcfbU/KFNfBpe+kpoMF1vKPDAo8tnPRTSrGD6aP/p5SXkAS2JemnlDAy9ciU4GgcPozMTiSqtSB5ZQkSLD5XCn9KxNbT1d4zM4xMbxgZE0Zmhr22IYzM7TGdlWFkToaR6Uqar/zfJAbfG0Zm5iA6Sy38c8Uu/4wQC3+kQvhdYWTGVrvH6YS/1JpMr+03k3SaLXyuauc83fBIyTEWccauBJ3twPTT2uVUKzay1COznU4beUrlFWDcGXXiRQkjcwESSs8G5rqO12mvT0bC7MEzErwEfhIS7w0ydvboH86emRJGZpKN60fDyJwII/N80Xz+A4GPdyJx9tQQAAAAAElFTkSuQmCC"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4>Выбор проекта дома</h4>
              </div>
              <div className="description-wrapper">
                <div className="description-block">
                  Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="icon-wrapper">
              <div className="icon-block text-center">
                <div className="outer-border">
                  <div className="inner-border">
                    <div className="icon-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">
                        <image id="Vector_Smart_Object" y="0.5" width="46" height="45" xlinkHref="data:img/png;base64,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"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4>Выбор проекта дома</h4>
              </div>
              <div className="description-wrapper">
                <div className="description-block">
                  Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="icon-wrapper">
              <div className="icon-block text-center">
                <div className="outer-border">
                  <div className="inner-border">
                    <div className="icon-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">
                        <image id="Vector_Smart_Object" y="0.5" width="46" height="45" xlinkHref="data:img/png;base64,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"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4>Выбор проекта дома</h4>
              </div>
              <div className="description-wrapper">
                <div className="description-block">
                  Проект можно выбрать из нашего каталога или предоставить свой. Адаптация под нашу технологию строительства - бесплатно
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SixthPage
