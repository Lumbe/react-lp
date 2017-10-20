import React from 'react'
import {setBackgroundImage, removeBackgroundImage} from "../common/main";
import backgroundImage from './catalog-header.jpg'
import './projectIndex.css'
import {Row, Col, Image, Clearfix, Button} from 'react-bootstrap'
import projectImage from './project-item.jpg'

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {

  }

  componentDidMount() {
    setBackgroundImage(backgroundImage, 'no-repeat', 'inherit');
  }

  componentWillUnmount() {
    removeBackgroundImage();
  }

  render() {
    return (
      <Row><div className="project-index">
        <div className="menu-divider"/>
        <h1 className="title">Проекты домов и коттеджей</h1>
        <p className="text-center description">Типовые проекты частных домов от компании Сервус</p>
        <Row className="item-list">
          <Col md={3} mdPush={9}>
            Filter
          </Col>
          <Col md={9} mdPull={3}>
            <Col md={6} sm={6} xs={12}>
              <div className="project-item">
                <Image src={projectImage} responsive/>
                <div className="project-options">
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                        <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с мансардой</div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                        <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                      </svg>
                      <br/>
                      с террасой
                    </div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                        <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с гаражом
                    </div>
                  </Col>
                  <Clearfix/>
                </div>
                <h3>Проект "Гелиос"</h3>
                <div className="item-footer">
                  <Col md={6}  className="area-wrapper">
                    <div className="area"><span className="text-highlight">989,60 <span className="units">кв.м.</span></span></div>
                    <small className="area-description">площадь объекта</small>
                  </Col>
                  <Col md={6} className="btn-wrapper">
                    <Button bsStyle="grey">Подробнее</Button>
                  </Col>
                  <Clearfix/>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
              <div className="project-item">
                <Image src={projectImage} responsive/>
                <div className="project-options">
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                        <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с мансардой</div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                        <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                      </svg>
                      <br/>
                      с террасой
                    </div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                        <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с гаражом
                    </div>
                  </Col>
                  <Clearfix/>
                </div>
                <h3>Проект "Гелиос"</h3>
                <div className="item-footer">
                  <Col md={6}  className="area-wrapper">
                    <div className="area"><span className="text-highlight">989,60 <span className="units">кв.м.</span></span></div>
                    <small className="area-description">площадь объекта</small>
                  </Col>
                  <Col md={6} className="btn-wrapper">
                    <Button bsStyle="grey">Подробнее</Button>
                  </Col>
                  <Clearfix/>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
              <div className="project-item">
                <Image src={projectImage} responsive/>
                <div className="project-options">
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                        <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с мансардой</div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                        <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                      </svg>
                      <br/>
                      с террасой
                    </div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                        <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с гаражом
                    </div>
                  </Col>
                  <Clearfix/>
                </div>
                <h3>Проект "Гелиос"</h3>
                <div className="item-footer">
                  <Col md={6}  className="area-wrapper">
                    <div className="area"><span className="text-highlight">989,60 <span className="units">кв.м.</span></span></div>
                    <small className="area-description">площадь объекта</small>
                  </Col>
                  <Col md={6} className="btn-wrapper">
                    <Button bsStyle="grey">Подробнее</Button>
                  </Col>
                  <Clearfix/>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
              <div className="project-item">
                <Image src={projectImage} responsive/>
                <div className="project-options">
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                        <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с мансардой</div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                        <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                      </svg>
                      <br/>
                      с террасой
                    </div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                        <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с гаражом
                    </div>
                  </Col>
                  <Clearfix/>
                </div>
                <h3>Проект "Гелиос"</h3>
                <div className="item-footer">
                  <Col md={6}  className="area-wrapper">
                    <div className="area"><span className="text-highlight">989,60 <span className="units">кв.м.</span></span></div>
                    <small className="area-description">площадь объекта</small>
                  </Col>
                  <Col md={6} className="btn-wrapper">
                    <Button bsStyle="grey">Подробнее</Button>
                  </Col>
                  <Clearfix/>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
              <div className="project-item">
                <Image src={projectImage} responsive/>
                <div className="project-options">
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="20" viewBox="0 0 27 20">
                        <image width="27" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAANCAMAAABvheXhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACjJ8ixAAAAZnRSTlMAH/StuSAk4ZLf9UX6Jm7oDm3pNQXWiRXvYGFy5Q2ayAFCm1v9PhfyMvw2HEc04sdcocO/nae8iNcbOS9qE/srNzsCzJYD0JEPt64E045m7BJo6hDSUEB+yhYR7So/8JXcItu9uxjKJPoKAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EKEwslHOl34R4AAAD1SURBVBjTY2AAA0amNARgYmRABswsrGzsHKwgwMbJxYwsxc3Dy8DHLwBmCwoJ83AjpERExRjEJSTBbHEJKVYxURG4nLSMLIOcvAKDItAiJXllFVUZaZiUmroyg4amFoM2lw6DrqaqjJ6+gboaVM7QSIHB2ISBwdSMQUFeydzCUkLSyBAiZaVpzcBgY8ugamfPICnhAHQIn5CjphVIysnZBazE1c2dwUNI0NOLgcHbx9fF2Qko5ucfAJYLDApm8A0JTZMMCwsLt7OKiGRgiPIPBEsFRPsxxNjFusdBAB9ILD4hERwcckmJrMkprEgglSEuDRdQBwAXFy7PQewj+QAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с мансардой</div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20">
                        <image width="18" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAMAAAC3SZ14AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAABDV7s9AAAARnRSTlMANMzcRw6S/cOuqhlV5u1iAUvg8m0DIragFAqH+801BXn21z8qlA+z9PDx4jxgxNhNwJ2+dhUrOVCKqSUzybCsQCA6EiyJN7uMOgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhChMLJg4x48OVAAAAtElEQVQY023O1w6CQBAF0LGCvevauyJ2AUVUuvP/nySbpYjxvszNyW5mAFgSyVQavpPJcnwO84VIiqVypQq1eqPZYtDuIOnS0usPhiNvjifT2Tx4vuC55QrWiMImjIi4hd2e5XD0yylcQc7wmz90kcIqK2xeb2wqMqAaf60ipXt0hObTIzri6VNsI6WXruuaQknRvPrySCLEQJOSiQYhEvtoBWQFG39JtAEcwYW3Bq7gANjiByl9I9+uMk7qAAAAAElFTkSuQmCC"/>
                      </svg>
                      <br/>
                      с террасой
                    </div>
                  </Col>
                  <Col md={4} xs={4}>
                    <div className="option-item">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="20" viewBox="0 0 19 20">
                        <image width="19" height="20" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEUAAAAqdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4qdh4AAACbAq7tAAAAO3RSTlMAIKz0zMOgzhmloxpSZmHi9aQPZVaKKzzqxqIqjx7L+UJAb9Pz+M+D99RwIyWJjQs+PQrv5uXwW5BsDq0QaqIAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4QoTCyY1gOgqsQAAAKVJREFUGNNlkMcSglAMRQPIU+xiLyhgoYOKAnr//7+kPBbgWaScyWQyISISRAkVkihQRQcyq5DRrVQPCtX0MSjzEKMijSfTmTrHonRLrPK4xmaL3R6HQmnHk24YhgLTOF/0600jstDGIttxmzg2gVEThsJ5rs973/W4CxByFyLgLrpH3EWPJ3d/++IXa/JOKI1b5yVpMZ2h/pCAjFefROXVNzbz+ANpIBx9D5r/mQAAAABJRU5ErkJggg=="/>
                      </svg>
                      <br/>
                      с гаражом
                    </div>
                  </Col>
                  <Clearfix/>
                </div>
                <h3>Проект "Гелиос"</h3>
                <div className="item-footer">
                  <Col md={6}  className="area-wrapper">
                    <div className="area"><span className="text-highlight">989,60 <span className="units">кв.м.</span></span></div>
                    <small className="area-description">площадь объекта</small>
                  </Col>
                  <Col md={6} className="btn-wrapper">
                    <Button bsStyle="grey">Подробнее</Button>
                  </Col>
                  <Clearfix/>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </div></Row>
    )
  }
}

export default ProjectIndex