import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Login from './component/Login';
class App extends Component {
  constructor(){
    super()
    this.state={
      token:''
    }
    this.login=this.login.bind(this);
  }
  login(email,password){
    console.log(email);
    console.log(email);
  }
  render() {
    return (
      <div className="container">
      <Login login={this.login}/>
      </div>
    );
  }
}

export default App;
