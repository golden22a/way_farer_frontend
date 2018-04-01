import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize';
import User from '../models/User';
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      connected:this.props.connected
    };
    this.onLogin=this.onLogin.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setEmail=this.setEmail.bind(this);
  }
  onLogin(){
    let user = this.state;
  User.login(user).then( (res) => {
    this.setState({
      connected:true
    })
    this.props.login(res.data.token,res.data.user);
  }).catch( (err) => {
    console.log(err);
  });
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
    if(this.props.connected){

      this.props.history.push('/');
    }
    return (

      <Row>

      <Input type="email" label="Email" s={12} vale={this.state.email} onChange={this.setEmail} />
      <Input type="password" label="password" s={12} vale={this.state.password} onChange={this.setPassword}/>
      <Col s={12} offset='s5'  >
      <Button waves='light' onClick={this.onLogin}>Login<Icon left>send</Icon></Button>
      </Col>
      </Row>

    );
  }
}


export default Login;
