import React, { Component } from 'react'
import './Header.css'
import {Menu} from 'antd'
import { InfoCircleOutlined, ProfileOutlined, HomeOutlined, QuestionCircleOutlined, 
    SettingOutlined, LogoutOutlined} 
from '@ant-design/icons';
import 'antd/dist/antd.css';
import NavBarProfilePic from './NavBarProfilePic';
import { Link } from 'react-router-dom'


export class Header extends Component {
    render() {
        return (
            <div>
                <NavBarProfilePic />
                <span className='leftNavBar'>
                    <Menu mode="horizontal"
                    theme="light"
                    style={{ lineHeight: '65px' }}>
                     <Menu.Item key="home"  icon={<HomeOutlined />} >
                     <Link to='/home'>Home</Link>
                     </Menu.Item>
                     <Menu.Item key="profile"  icon={<ProfileOutlined />}>
                        <Link to='/profile'>Profile</Link>
                     </Menu.Item>
                    <Menu.Item key="newpoll"  icon={<QuestionCircleOutlined />}>
                        Create new poll
                     </Menu.Item>
                    <Menu.Item key="settings"  icon={<SettingOutlined />}>
                        Settings
                     </Menu.Item>
                     <Menu.Item key="about"  icon={<InfoCircleOutlined />}>
                        About Discover
                     </Menu.Item>
                     <Menu.Item key="logout" style={{color:'red'}} icon={<LogoutOutlined />}>
                        <Link to='/'>Logout</Link>
                     </Menu.Item>
                    </Menu>
                    </span>
                </div>
        )
    }
}

export default Header