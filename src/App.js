import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Login from './component/Login';
import Connect from './auth/connect'
class App extends Component {
  constructor(){
    super()
    this.state={
      connect:false,
      user:{}
    }
    this.login=this.login.bind(this);
  }
  componentWillMount(){
    let token=localStorage.getItem('token');
    Connect.islogged(token).then((res)=>{
      this.setState({
        connected:true,
        user:res.data.user
      })
    }).catch( (err) => {
      console.log(err);
    })
  }
  login(token,user){
    this.setState({
      connected:true,
      user:user
    });
    localStorage.setItem('token', token);
    console.log(this.state.token);

  }
  render() {
    let logged = !this.state.connected ? < Login  login={this.login}/> : null ;
    return (
      <div className="container">
      {logged}
      </div>
    );
  }
}

export default App;
