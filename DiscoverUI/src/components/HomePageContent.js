import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './HomePageContent.css';
import InfiniteResourceList from './InfiniteResourceList';
import ListSearch from './ListSearch';
import PollList from './PollList';

const searchStylePollList= {
  searchStyle: { width: 330, paddingTop: 2, paddingBottom: 12 }
};

const searchStyleResourceList= {
  searchStyle: { width: 502, paddingTop: 2, paddingBottom: 12 }
};

export class HomePageContent extends Component {
    render() {
        return (
        <div className='content'>
          <span className='leftHomeContent'>
          <h3 style={{backgroundColor: 'lightblue', padding: 6}}>Registered Users</h3>
            <ListSearch key="listsearch" searchStyle= {searchStyleResourceList.searchStyle}/>
            <InfiniteResourceList key="infiniteresourcelist"/>
          </span>
          <span className='rightHomeContent'>
            <h3 style={{backgroundColor: 'lightblue', padding: 6}}>Poll List</h3>
              <ListSearch key="listsearch" searchStyle= {searchStylePollList.searchStyle}/>
              <PollList key="infinitepolllist"/>
          </span>
        </div>
        )}}

export default HomePageContent