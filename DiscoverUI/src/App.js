import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import Register from './components/Register';

class App extends React.Component {
    
  render(){
    return (
      <>
        <Switch>
          <Route path="/home" render={()=> <Home/>} />
          <Route path='/profile' render={()=> <Profile/>} />
          <Route path='/register' render={()=> <Register/>} />
          <Route path="/" render={()=> <LoginForm/>}/>
        </Switch>  
        </>     
    );
  }
  
}

export default App;
