import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize'
import Navbar from '../Nav';
import User from '../models/User';
class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    };
    this.onLogin=this.onLogin.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setEmail=this.setEmail.bind(this);
  }
  onLogin(){
<<<<<<< HEAD
    let user = this.state;
  User.login(user).then( (res) => {
    this.props.login(res.data.token,res.data.user);
  }).catch( (err) => {
    console.log(err);
  });
=======
    let user =this.state;

    console.log(user);
    var s=User.login(user);
    console.log(s);
>>>>>>> 3b42cb2486103cb47f316140066692820595dac1
  }
  setEmail (ev){
    this.setState({
      email: ev.target.value
    });


  }
  setPassword (ev) {
    this.setState({
      password: ev.target.value
    });

  }
  render() {

    return (
      <div>
      <Navbar />
      <Row>

      <Input type="email" label="Email" s={12} vale={this.state.email} onChange={this.setEmail} />
      <Input type="password" label="password" s={12} vale={this.state.password} onChange={this.setPassword}/>
      <Col s={12} offset='s5' >
      <Button waves='light' onClick={this.onLogin}>Login<Icon left>send</Icon></Button>
      </Col>
      </Row>
      </div>
    );
  }
}


export default Login;
