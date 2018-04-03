import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize';
import User from '../models/User';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      city:'',
      connected:this.props.connected
    };
    this.handleSignup=this.handleSignup.bind(this);
    // this.setPassword=this.setPassword.bind(this);
    // this.setEmail=this.setEmail.bind(this);
  }
  handleSignup () {
       let formData = {
           firstname: this.refs.firstname.value,
           lastname: this.refs.lastname.value,
           email: this.refs.email.value,
           password: this.refs.password.value,
           city: this.refs.city.value,
       };
       this.props.authenticate(formData);
       console.log("formData",formData);
   }

  // onSignup(){
  //   let user = this.state;
  // User.login(user).then( (res) => {
  //   this.setState({
  //     connected:true
  //   })
  //   this.props.login(res.data.token,res.data.user);
  // }).catch( (err) => {
  //   console.log(err);
  // });
  // }

  // handleChangeFor = (propertyName) => (event) => {
  //     const { user } = this.state;
  //     const newUser = {
  //       ...user,
  //       [propertyName]: event.target.value
  //     };
  //     this.setState({ user: newUser });
  //     UserModel.user
  //     (this.state.token).then((res) =>{
  //       this.setState({
  //         posts:res.data.posts,
  //         length:res.data.posts.length
  //       })
  //     })
  //   }
  //
  // setEmail (ev){
  //   this.setState({
  //     email: ev.target.value
  //   });
  //
  //
  // }
  // setPassword (ev) {
  //   this.setState({
  //     password: ev.target.value
  //   });
  //
  // }

  render() {
    if(this.props.connected){

      this.props.history.push('/signup');
    }
    return (

      <Row>

        <form onSubmit={ this.handleLogin }>
        <input type="text" ref="username" placeholder="FirstName" s={12} />
        <input type="text" ref="lastname" placeholder="LastName" s={12} />
        <input type="email" ref="email" placeholder="Email" s={12} />
        <input type="password" placeholder="password" s={12} />
        <input type="text" placeholder="city" s={12} />
        <Col s={12} offset='s5'  >
        <Button waves='light' >Signup<Icon left>send</Icon></Button>

      </Col>
      </form>
      </Row>

    );
  }
}


export default Signup;
