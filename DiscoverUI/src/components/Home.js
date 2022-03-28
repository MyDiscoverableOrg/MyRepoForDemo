import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Header} from './Header';
import {HomePageContent} from './HomePageContent';


export class Home extends Component {
    render() {
        return (
            <div>
              <Header/>
              <HomePageContent/>
            </div>
        )
    }
}

export default Home