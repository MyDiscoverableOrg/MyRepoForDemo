import { Image } from 'antd';
import React, { Component } from 'react'
import './NavBarProfilePic.css';

export class NavBarProfilePic extends Component {
  render() {
    return (
      <span className='profilePic'>
      <Image 
      width={120}
       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
       </span>
    )
  }
}

export default NavBarProfilePic