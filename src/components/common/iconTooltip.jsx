import React from 'react'
import {OverlayTrigger,Tooltip } from 'react-bootstrap'

class IconTooltip extends React.Component {
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        {this.props.children}
      </OverlayTrigger>
    );
  }
}

export default IconTooltip