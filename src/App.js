import React, { Component } from 'react';
import './App.css';
import './index.js';
import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Connect from './auth/connect';
import Nav from './component/Nav';
import Content from './component/Content';
import {Row,Col, Modal} from 'react-materialize';
import Home from './component/Home';
import Profile from './component/Profile';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      connected:false,
      token:'',
      user:{}
    }
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this);
  }
  componentWillMount(){
    let token=localStorage.getItem('token');
    if(token){
      console.log('calling');
    Connect.islogged(token).then((res)=>{
      this.setState({
        connected:true,
        user:res.data.user,
        token:token
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
  logout(){
    localStorage.removeItem("token");
    this.setState({
      connected:false,
      token:'',
      user:{}
    });
  }
  signup(token,user){
    this.setState({
      connected:true,
      token:token,
      user:user
    });

    localStorage.setItem('token', token);
      console.log(this.state.token);
  }
  render() {
    let content= this.state.connected ?  ( <Content user={this.state.user} token={this.state.token}/>


    ) :  <Home />;
    return (
      <div className='main'>
      <Nav connected={this.state.connected} user={this.state.user} logout={this.logout} login={this.login}  signup={this.signup}/>

      <div className="container">

      <Switch>
<<<<<<< HEAD
        <Route path="/login" render={(props) => <Login {...props} login={this.login} connected={this.state.connected}/>} />
=======
      <Route path="/profile" render={(props) => this.state.connected ? <Profile {...props} user={this.state.user} /> : <Home /> } />
      <Route path="/user/posts" render={(props) => this.state.connected ?  <Content {...props} user={this.state.user} token={this.state.token} userPosts={true}  /> : <Home/>} />
        <Route path='/' render={(props) => this.state.connected ?  (
            <Content {...props} user={this.state.user} token={this.state.token} />
            ) :
            <Home /> }  />
        <Route path='/*' render={() =>   <Redirect to="/"/>} />
>>>>>>> 4c02b8be66554732239375dcac828a14e63f6875


      </Switch>

      </div>




      </div>
    );
  }
}

export default App;
