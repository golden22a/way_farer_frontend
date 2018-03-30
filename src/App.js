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
    if(!this.state.connected){
      console.log('calling');
    let token=localStorage.getItem('token');
    Connect.islogged(token).then((res)=>{
      this.setState({
        connected:true,
        user:res.data.user,
        token:res.data.token
      })
    }).catch( (err) => {
      console.log(err);
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
    return (
      <div className='main'>
      <Nav connected={this.state.connected} user={this.state.user}/>
      <div className="container">

      <Switch>
        <Route path="/login" render={(props) => <Login {...props} login={this.login} connected={this.state.connected}/>} />

      </Switch>
      <CitiesList />
      </div>
      </div>
    );
  }
}

export default App;
