import React from 'react'
import TopMenu from '../navigation/topMenu'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: false
    };
  }

  render() {
    return (
      <header className='d-md-flex justify-content-center'>
        <TopMenu/>
      </header>
    )
  }
}

export default Header
