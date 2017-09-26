import React from 'react'
import TopMenu from '../navigation/topMenu'
import './header.css'

class Header extends React.Component {

  render() {
    return (
      <header>
        <TopMenu inverse={this.props.inverse}/>
      </header>
    )
  }
}

export default Header
