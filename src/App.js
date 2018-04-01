import React, { Component } from 'react';
import './App.css';
import './index.js';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Login from './component/Login';
import Connect from './auth/connect';
import Nav from './component/Nav';

import CitiesList from './component/CitiesList';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      connected:false,
      token:'',
      user:{}
    }
    this.login=this.login.bind(this);
  }
  componentWillMount(){
    let token=localStorage.getItem('token');
    if(token){
      console.log('calling');
    Connect.islogged(token).then((res)=>{
      this.setState({
        connected:true,
        user:res.data.user,
        token:res.data.token
      })
    }).catch( (err) => {
      localStorage.removeItem("token");
    })
  }
  }
  login(token,user){
    this.setState({
      connected:true,
      token:token,
      user:user
    });
    localStorage.setItem('token', token);
    console.log(this.state.token);

  }
  render() {
    let citieslist= this.state.connected ?   <CitiesList /> : '';
    return (
      <div className='main'>
      <Nav connected={this.state.connected} user={this.state.user}/>

      <div className="container">

      <Switch>
        <Route path="/login" render={(props) => <Login {...props} login={this.login} connected={this.state.connected}/>} />

      </Switch>
      {citieslist}
      </div>
      </div>
    );
  }
}

export default App;
