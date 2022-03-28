import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Header} from './Header';
import ProfilePageContent from './ProfilePageContent';


export class Profile extends Component {
    render() {
        return (
            <div>
              <Header/>
              <ProfilePageContent/>
            </div>
        )
    }
}

export default Profile